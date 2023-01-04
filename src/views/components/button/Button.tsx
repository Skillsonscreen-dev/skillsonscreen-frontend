import react from 'react'
import Loader from '../Loader/Loader'
import { Wrapper } from './styles'

interface ButtonInterface {
    isLoading?: boolean,
    isDisabled?: boolean,
    onClick?: () => void
    children: React.ReactNode
}
const Button: React.FC<ButtonInterface> = ({isLoading = false, onClick = () => {}, isDisabled = false, children}) => {

    return (
        <Wrapper disabled={isDisabled} onClick={() => {
            if (isLoading) {
                return;
            }
            onClick()
        }}>
            {isLoading ? <Loader /> : children}
        </Wrapper>
    )
}

export default Button