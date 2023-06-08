import React, { ReactNode, createContext, useState } from "react";

interface MyContextProps {
    currentName: string;
    setCurrentName: (currentName: string) => void;
    currentPayment: string;
    setCurrentPayment: (currentPayment: string) => void;
    currentResult: string;
    setCurrentResult: (currentResult: string) => void;
    currentTime: string;
    setCurrentTime: (currentTime: string) => void;
}

interface MyProviderProps {
    children: ReactNode;
}

export const UserContext = createContext({} as MyContextProps);

export default function Context({ children }: MyProviderProps) {
    const [currentName, setCurrentName] = useState("");
    const [currentPayment, setCurrentPayment] = useState("");
    const [currentResult, setCurrentResult] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    return (
        <>
            <UserContext.Provider
                value={{
                    currentName,
                    setCurrentName,
                    currentPayment,
                    setCurrentPayment,
                    currentResult,
                    setCurrentResult,
                    currentTime,
                    setCurrentTime,
                }}
            >
                {children}
            </UserContext.Provider>
        </>
    )
}
