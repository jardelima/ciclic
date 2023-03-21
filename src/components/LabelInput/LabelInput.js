import React from "react";

import { Label, Input } from "./LabelInput.style";

function LabelInput({ setValue, ...props }) {
    return (
        <>
            <Label htmlFor={props.id}>{props.label}:</Label>
            <Input 
                name={props.id} 
                id={props.id} 
                onChange={({target}) => setValue(target.value)} 
                {...props}
            />
        </>
    )
}

export default LabelInput;