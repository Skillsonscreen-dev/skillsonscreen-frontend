import { Wrapper } from './styles';

const CourseFor: React.FC = () => {
    const content = [
        'This course is especially made for those people who have never baked and want to learn how. Also for people who want to learn new baked recipes',
        'Beginners, Intermediate bakers and home bakers who are interested to start bakery business',
        'For baking lovers',
        'Beginners who haven\'t baked before but aspire to learn how to bake at home'
    ]
    return (
        <Wrapper>
            <h3>Who is this course for:</h3>
            <div className="content">
                {
                    content.map((item, i) => (
                        <div className="item" key={i}>
                            <span className='icon'><img src="/assets/icons/check.svg" /></span>                            
                            <span className='text'>{item}</span>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default CourseFor;