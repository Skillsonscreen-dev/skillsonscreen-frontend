import { InfoCard } from './styles';

const CourseInfo: React.FC = () => {
    const items :any = {
        'Level': 'Beginner',
        'Language': 'English (audio and subtitle)',
        'Duration': '12hours to complete',
        'Classes': '25',
        'Resources': '5 downloads',
        'Students': '2,345 enrolled'
    }

    return (
        <InfoCard>
            <div className="inner">
                {
                    Object.keys(items).map((item, i) => (
                        <>
                            {
                                i != 0? <span className='vertical-rule'>|</span> : null
                            }
                            
                            <div className="card-item" key={item}>
                                <span>{item}</span>
                                <p>{items[item]}</p>
                            </div>
                        </>                        
                    ))
                }     
            </div>   
        </InfoCard>
    )
}

export default CourseInfo;