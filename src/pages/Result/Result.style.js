import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: block;
    padding: 0 2rem;
`;

export const Description = styled.p`
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 24px;
    color: #1c1c1c;
    margin: 60px 0;
    text-align: center;
`;

export const ButtonReturn = styled(Link)`
    display: block;
    padding: 0.8rem 2rem;
    color: #fff;
    border-radius: 6px;
    border: none;
    background-color: #8dd75b;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    margin: 40px auto;
    transition: 400ms;
    text-align: center;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        filter: brightness(0.95);
    }
`;