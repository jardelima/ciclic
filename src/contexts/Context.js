import React, { createContext, useState } from "react";

export const UserContext = createContext(0);

export default function Context({ children }) {
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
