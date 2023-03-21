import React, { useState } from "react";
import Header from "../../components/Header/Header";
import LabelInput from "../../components/LabelInput/LabelInput";

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

    const simulation = () => {
        return calculation = {"expr": `${Number(cleanPayment)} * (((1 + ${fees}) ^ ${Number(cleanTime) * 12} - 1) / ${fees})`};
    }

    const sendSimulation = async (e) => {
        e.preventDefault();

        simulation();

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
            window.location.href=`result/${name}/${cleanPayment}/${cleanTime}/${result}`;

            // REACT ROUTER V6.9
            // Not working function redirect
            // return redirect(`result/${name}/${payment}/${time}/${result}`);
        } else {
            return null;
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
                            onBlur={prefix}
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="time">Tempo:</Label>
                        <Select name="time" id="time" value={time} onChange={({target}) => setTime(target.value)}>
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