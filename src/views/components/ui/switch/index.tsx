import { ReactNode } from "react";
import { Wrapper } from "./styles";

interface SwitchProps {
    // color?: 'primary' | 'info' | 'dark' | 'secondary' | 'light' | 'white' | 'black';
    // variant?: 'outline' | 'filled';
    // size?: 'sm' | 'md' | 'lg';
    // br?: number;
}

const Switch: React.FC<SwitchProps> = (props) => {
    return (
        <Wrapper>
            <input type="checkbox" />
            <span className="slider round"></span>
        </Wrapper>
    )
}

export default Switch;