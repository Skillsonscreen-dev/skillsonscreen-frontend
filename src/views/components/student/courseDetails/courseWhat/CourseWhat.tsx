import { Wrapper } from './styles';

const CourseFor: React.FC = () => {
    const content = [
        'How to bake pastries,bread,cookies,  and etc.',
        'Understand the Ingredients used in Making pastries.',
        'Everything you need to know to make the perfect pastries every step of the way from mixing to serving!',
        'Different Techniques of Baking.',
        'In this course You will learn how to bake easily at home.',
        'Everything you didn\'t know there was to know about pastries.',
    ]
    return (
        <Wrapper>
            <h3>Who is this course for:</h3>
            <div className="content">
                {
                    content.map((item, i) => (
                        <div className={"item"} key={i}>
                            <div className={'inner'}>
                                <span className={'icon'}>
                                    <img src="/assets/icons/dot.svg" />
                                </span>                            
                                <span className={'text'}>{item}</span>
                            </div>                            
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default CourseFor;