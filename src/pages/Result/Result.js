import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { ButtonReturn, Container, Description } from "./Result.style";

function Result() {
    const { name, payment, time, result } = useParams();

    return (
        <>
            <Header />

            <Container>
                <Description>
                    Olá, {name}. Juntando {payment} todo mês, você terá R$ {Number(result).toFixed(2)} em {time} anos. 
                </Description>

                <ButtonReturn to="/">Simular novamente</ButtonReturn>
            </Container>
        </>
    )
}

export default Result;