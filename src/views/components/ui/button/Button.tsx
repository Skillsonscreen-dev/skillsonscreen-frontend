import { ReactNode } from "react";
import { ButtonBordered, ButtonFilled } from "./styles";

interface ButtonProps {
    className?: string;
    color?: 'primary' | 'info' | 'dark' | 'secondary';
    variant?: 'outline' | 'filled';
    children?: ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        props.variant === 'outline'? (
            <ButtonBordered className={props.className} color={props.color}>
                { props.children }
            </ButtonBordered>
        ):
        (
            <ButtonFilled className={props.className} color={props.color}>
                { props.children }
            </ButtonFilled>
        )        
    )
}

export default Button;