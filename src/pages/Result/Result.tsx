import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { UserContext } from "../../contexts/Context";
import { ButtonReturn, Container, Description } from "./Result.style";

function Result() {
    const {
        currentName,
        currentPayment,
        currentResult, 
        currentTime, 
    } = useContext(UserContext);

    return (
        <>
            <Header />

            <Container>
                <Description>
                    Olá, {currentName}. Juntando {currentPayment} todo mês, você terá R$ {Number(currentResult).toFixed(2)} em {currentTime} {Number(currentTime) > 1 ? "anos" : "ano"}. 
                </Description>

                <ButtonReturn to="/">Simular novamente</ButtonReturn>
            </Container>
        </>
    )
}

export default Result;
