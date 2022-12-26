import { ReactNode } from "react";
import { ButtonBordered, ButtonFilled } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'primary' | 'info' | 'dark' | 'secondary' | 'light' | 'white' | 'black';
    variant?: 'outline' | 'filled';
    size?: 'sm' | 'md' | 'lg';
    br?: number;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        props.variant === 'outline'? (
            <ButtonBordered
                { ...props }
            >
                { props.children }
            </ButtonBordered>
        ):
        (
            <ButtonFilled
                { ...props }
            >
                { props.children }
            </ButtonFilled>
        )        
    )
}

export default Button;