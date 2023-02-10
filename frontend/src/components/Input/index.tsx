import * as SC from "./styles"

interface InputProps{
    placeholder: string;
    type: string
    onChange: (e: any) => void;
    value: string;
}

const Input = ({placeholder, type, onChange, value}: InputProps) => {
    return (
        <SC.Input type={type} placeholder={placeholder} onChange={onChange} value={value}/>
    )
}
export default Input