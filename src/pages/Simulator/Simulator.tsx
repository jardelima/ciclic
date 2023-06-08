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
    const [name, setName] = useState<string>("");
    const [payment, setPayment] = useState<string>("");
    const [time, setTime] = useState<string>("1");

    let fees = 0.00517;
    let cleanTime = time.replace("ano", "").replace("anos", "");
    let cleanPayment = payment.replace("R$ ", "");

    let calculation: {
        "expr": string;
    };

    const {
        setCurrentName,
        setCurrentPayment,
        setCurrentResult,
        setCurrentTime,
    } = useContext(UserContext);

    let navigate = useNavigate();

    const simulation = (payment: string, fees: number, time: string) => {
        return calculation = {"expr": `${payment} * (((1 + ${fees}) ^ ${Number(time) * 12} - 1) / ${fees})`};
    }

    const sendSimulation = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        simulation(cleanPayment, fees, cleanTime);

        try {
            let response = await fetch("http://api.mathjs.org/v4/", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(calculation),
            });
    
            let simulationResponse = await response.json();
    
            let result = simulationResponse.result;
    
            if(response.ok) {
                setName("");
                setPayment("");
                setTime("1");
    
                // CONTEXT
                setCurrentName(name.length > 0 ? name : "pessoa");
                setCurrentPayment(payment);
                setCurrentTime(time);
                setCurrentResult(result);
    
                return navigate("/result");
            } else if(response.status === 400) {
                return navigate("/error");
            } else {
                return navigate("/error");
            }
        } catch (error) {
            console.log(error)
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
