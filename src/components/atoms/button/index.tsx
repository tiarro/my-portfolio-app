import React from 'react';
import {Button} from "primereact/button";
import {IButton} from "../../../interfaces/Button.ts";

const ButtonProps = ({severity, onClick, icon, size, rounded, text, className}: IButton) => {
    return (
        <>
            <Button
                severity={severity}
                onClick={onClick}
                icon={icon}
                size={size}
                rounded={rounded}
                text={text}
                className={className}
            />
        </>
    );
};

export default ButtonProps;
