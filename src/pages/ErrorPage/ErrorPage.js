import React from "react";
import Header from "../../components/Header/Header";
import { ButtonReturn, Container } from "../Result/Result.style";
import { Title, Description } from "./ErrorPage.style";

function ErrorPage() {
    return (
        <>
            <Header />

            <Container>
                <Title>404</Title>
                <Description>Tente novamente</Description>
                <ButtonReturn to="/">Página inicial</ButtonReturn>
            </Container>
        </>
    )
}

export default ErrorPage;