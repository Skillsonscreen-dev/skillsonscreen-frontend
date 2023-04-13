import { ReactNode } from "react";
import { OptionElement, SelectElement } from "./styles";

interface SelectProps {
    title: string;
    br?: number;
    children?: ReactNode;
    size?: 'sm' | 'md';
    w?: string;
}

interface OptionProps {
    value?: string;
    selected?: boolean;
    disabled?: boolean;
    children?: string;
}

export const Option: React.FC<OptionProps> = (props) => {
    return (
        <OptionElement value={ props.value } selected={props.selected} disabled={props.disabled}>
            { props.children }
        </OptionElement>
    )
}

const Select: React.FC<SelectProps> = (props) => {
    return (
        <SelectElement br={props.br} size={props.size} w={props.w}>
            <Option selected disabled>{ props.title }</Option>
            { props.children }
        </SelectElement>
    )
}

export default Select;