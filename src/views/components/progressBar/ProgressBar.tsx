import { ProgressBar as ProgressDiv, ProgressCount } from './styles';

const ProgressBar: React.FC<{ progress: number }> = (props) => {
    return (
        <ProgressDiv className="progress-bar">
            <ProgressCount className="skill-count" progress={props.progress} />
        </ProgressDiv>
    )
}

export default ProgressBar;