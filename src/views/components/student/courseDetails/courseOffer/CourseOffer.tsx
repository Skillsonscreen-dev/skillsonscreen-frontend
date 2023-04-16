import { Container, Content, Wrapper } from './styles';

const CourseOffer: React.FC = () => {
    const content = [
        {
            title: 'Certification',
            text: 'Earn an industry recognised certification on completetion of your course.',
            icon: '/assets/icons/certificate.svg'
        },
        {
            title: 'Flexible classes',
            text: 'Learn at your own pace. Set and maintain your schedule as it best suit.',
            icon: '/assets/icons/calendar.svg'
        },
        {
            title: 'Beginner friendly',
            text: 'We have beginner friendly courses for all skills to help kickstart your journey.',
            icon: '/assets/icons/chart-up.svg'
        },
        {
            title: '24hrs support',
            text: 'We have work round the clock to ensure you enjoy a seamless learning experience.',
            icon: '/assets/icons/clock.svg'
        }
    ]

    return (
        <Wrapper>
            <Container>
                <h3>What our couses offer</h3>
                <Content>
                    {
                        content.map(c => (
                            <div className="offer-item">
                                <div className="image">
                                    <img src={c.icon} alt="" />
                                </div>
                                <div className="body">
                                    <div className="title">{c.title}</div>
                                    <div className="text">{c.text}</div>
                                </div>
                            </div>
                        ))
                    }                    
                </Content>
            </Container>            
        </Wrapper>
    )
}

export default CourseOffer;