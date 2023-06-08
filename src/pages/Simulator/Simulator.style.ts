import styled from "styled-components";

export const Container = styled.div`
    display: block;
    padding: 0 2rem;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
`;

export const Subtitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #1c1c1c;
    margin: 30px 0;
`;

export const Field = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 16px;

    &:focus-within {
        input, select {
            border: 1px solid #8dd75b;
        }
    }
`;

export const Label = styled.label`
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
`;

export const Select = styled.select`
    width: 100%;
    height: 46px;
    border: 1px solid #dadada;
    border-radius: 6px;
    font-size: 14px;
    color: #1c1c1c;
    padding: 0 1rem;
    margin-left: 10px;
`;

export const ButtonSubmit = styled.button`
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
