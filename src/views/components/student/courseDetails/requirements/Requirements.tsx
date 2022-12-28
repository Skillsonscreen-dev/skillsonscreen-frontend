import { Wrapper } from './styles';

const Requirements: React.FC = () => {
    const content = [
        'You will need access to a kitchen with oven , the basic ingredients and basic kitchen tools such as ( saucepan, knives, roll pin, oven, kitchen cutter, electric mixer, loaf pans, spoons, and a large mixing bowl',
        'Have an interest in baking bread, cookies, pastries,cakes, etc.',
        'Beginners, Who are interested in learning baking.',
        'Have love for baking.',
        'No prior knowledge is required',
    ]
    return (
        <Wrapper>
            <h3>Requirements</h3>
            <div className="content">
                {
                    content.map((item, i) => (
                        <div className={"item"} key={i}>
                            <div className={'inner'}>
                                <span className='icon'><img src="/assets/icons/dot.svg" /></span>                            
                                <span className='text'>{item}</span>
                            </div>                            
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default Requirements;