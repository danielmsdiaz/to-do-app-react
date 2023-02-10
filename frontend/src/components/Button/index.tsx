import * as SC from "./styles"
import React from 'react'

interface ButtonProps{
    children: React.ReactNode
    onClick: () => void;
}

const Button = ({children, onClick}: ButtonProps) => {
    return (
        <SC.Button onClick={onClick}>
            {children}
        </SC.Button>
    )
}
export default Button