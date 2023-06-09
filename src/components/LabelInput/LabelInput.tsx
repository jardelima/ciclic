import React, { ChangeEventHandler, FocusEventHandler} from "react";

import { Label, Input } from "./LabelInput.style";

interface LabelInputProps {
    id: string,
    label: string,
    type: string,
    value: string,  
    placeholder?: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    onFocus?: FocusEventHandler<HTMLInputElement>,
    onBlur?: FocusEventHandler<HTMLInputElement>,
}

function LabelInput({id, label, value, type, onChange, placeholder, onFocus, onBlur} : LabelInputProps) {
    return (
        <>
            <Label htmlFor={id}>{label}:</Label>
            <Input 
                name={id} 
                id={id} 
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange} 
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    )
}

export default LabelInput;