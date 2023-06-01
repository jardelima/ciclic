import React, { useState, useContext } from "react";
import Header from "../../components/Header/Header";
import LabelInput from "../../components/LabelInput/LabelInput";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/Context";

import { 
    Container,
    Field,
    Subtitle,
    Label,
    Select,
    ButtonSubmit,
} from "./Simulator.style";

function Simulator() {
    const [name, setName] = useState("");
    const [payment, setPayment] = useState("");
    const [time, setTime] = useState("1");

    let fees = 0.00517;
    let cleanTime = time.replace("ano", "").replace("anos", "");
    let cleanPayment = payment.replace("R$ ", "");
    let calculation;

    const {
        setCurrentName,
        setCurrentPayment,
        setCurrentResult,
        setCurrentTime,
    } = useContext(UserContext);

    let navigate = useNavigate();

    const simulation = (payment, fees, time) => {
        return calculation = {"expr": `${Number(payment)} * (((1 + ${fees}) ^ ${Number(time) * 12} - 1) / ${fees})`};
    }

    const sendSimulation = async (e) => {
        e.preventDefault();

        simulation(cleanPayment, fees, cleanTime);

        let response = await fetch("http://api.mathjs.org/v4/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(calculation),
        });

        let simulationResponse = await response.json();

        let result = simulationResponse.result;

        if(response.ok && Number(cleanPayment) > 0) {
            setName("");
            setPayment("");
            setTime("1");

            // CONTEXT
            setCurrentName(name.length > 0 ? name : "pessoa");
            setCurrentPayment(payment);
            setCurrentTime(time);
            setCurrentResult(result);

            return navigate("/result");
        } else {
            return navigate("/error");
        }
    }

    const prefix = () => {
        if(!payment.includes("R$")) {
            setPayment(`R$ ${payment}`);
        }
    }

    return (
        <>
            <Header />

            <Container>
                <Subtitle>Simulador</Subtitle>
                    <Field>
                        <LabelInput
                            label="Nome"
                            id="name"
                            type="text"
                            value={name}
                            setValue={setName}
                            data-cy="name"
                        />
                    </Field>

                    <Field>
                        <LabelInput
                            label="Mensalidade"
                            id="payment"
                            type="text"
                            value={payment}
                            setValue={setPayment}
                            placeholder="R$ 100"
                            onFocus={prefix}
                            onBlur={prefix}
                            data-cy="payment"
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="time">Tempo:</Label>
                        <Select name="time" id="time" data-cy="time" value={time} onChange={({target}) => setTime(target.value)}>
                            <option value="1">1 ano</option>
                            <option value="2">2 anos</option>
                            <option value="3">3 anos</option>
                        </Select>
                    </Field>

                    <ButtonSubmit onClick={sendSimulation}>Simular</ButtonSubmit>
            </Container>
        </>
    )
}

export default Simulator;
