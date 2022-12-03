import { ReactNode } from "react";
import { OptionElement, SelectElement } from "./styles";

interface SelectProps {
    title: string;
    children?: ReactNode;
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
        <SelectElement>
            <Option selected disabled>{ props.title }</Option>
            { props.children }
        </SelectElement>
    )
}

export default Select;