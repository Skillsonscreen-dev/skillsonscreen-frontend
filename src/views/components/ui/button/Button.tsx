import { ReactNode } from "react";
import { ButtonBordered, ButtonFilled } from "./styles";

interface ButtonProps {
    className?: string;
    color?: 'primary' | 'info' | 'dark' | 'secondary' | 'light';
    variant?: 'outline' | 'filled';
    size?: 'sm' | 'md' | 'lg';
    children?: ReactNode;
    br?: number;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        props.variant === 'outline'? (
            <ButtonBordered
                className={props.className}
                color={props.color}
                size={props.size}
                br={props.br}
            >
                { props.children }
            </ButtonBordered>
        ):
        (
            <ButtonFilled
                className={props.className}
                color={props.color}
                size={props.size}
                br={props.br}
            >
                { props.children }
            </ButtonFilled>
        )        
    )
}

export default Button;