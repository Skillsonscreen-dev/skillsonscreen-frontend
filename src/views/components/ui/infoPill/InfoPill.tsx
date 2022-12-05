import { ReactNode } from "react";
import { InfoPillBordered, InfoPillFilled } from "./styles";

interface InfoPillProps {
    className?: string;
    color?: 'primary' | 'info' | 'dark' | 'secondary' | 'light' | 'white';
    variant?: 'outline' | 'filled';
    size?: 'sm' | 'md' | 'lg';
    children?: ReactNode;
    br?: number;
}

const InfoPill: React.FC<InfoPillProps> = (props) => {
    return (
        props.variant === 'outline'? (
            <InfoPillBordered
                className={props.className}
                color={props.color}
                size={props.size}
                br={props.br}
            >
                { props.children }
            </InfoPillBordered>
        ):
        (
            <InfoPillFilled
                className={props.className}
                color={props.color}
                size={props.size}
                br={props.br}
            >
                { props.children }
            </InfoPillFilled>
        )        
    )
}

export default InfoPill;