import THeader from '../../../components/Teacher/TeacherHeader'
import Footer from '../../../components/footer/Footer';
import { Container, Wrapper } from './styles';
import TeacherDashboardHeader from '../../../components/Teacher/dashboardHeader';
import { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
const HelpScreen: React.FC = () => {
    const faqs = [
        { title: 'Creating a course ', answer: 'lorem srdtfyguhjknjbhvgcfxdzsretfyguhjnbn bvcfxghjk'},
        { title: 'How to become a premium Tutor', answer: 'lorem srdtfyguhjknjbhvgcfxdzsretfyguhjnbn bvcfxghjk'},
        { title: 'How much do I make as a Tutor ', answer: 'lorem srdtfyguhjknjbhvgcfxdzsretfyguhjnbn bvcfxghjk'},
        { title: 'How do I promote my course to gain more students', answer: 'lorem srdtfyguhjknjbhvgcfxdzsretfyguhjnbn bvcfxghjk'},
        { title: 'Privacy and copywrite policy on my content', answer: 'lorem srdtfyguhjknjbhvgcfxdzsretfyguhjnbn bvcfxghjk'}
    ]
    const [ showFaq, setShowFaq ] = useState(false);

    const toggleShowFaq = () => {
        setShowFaq(!showFaq);
    }
    
    return ( 
        <Wrapper>
            <THeader />
            
                <Container>
                <TeacherDashboardHeader/>
                <div className="start-banner">
                    <div className="">
                        <span>24hrs support <br />
                            for you</span>
                        <button>Create a Course</button>
                    </div>
                </div>
                <div className="faq-container">
                <h4>Frequently asked questions</h4>
                <div className="faqs">
                {
                    faqs.map(f => (
                        <div className="faq" onClick={toggleShowFaq} key={f.title}>
                            <div className="info">
                            <div className="icon">
                                {
                                    showFaq? <AiOutlineMinusCircle />:
                                    <AiOutlinePlusCircle />
                                } 
                            </div> 
                            <p>{f.title}</p>
                            </div>
                            <p>
                                {
                                    showFaq && (
                                        <p>{f.answer}</p>
                                    )
                                }
                            </p>
                        </div>
                    ))
                }
                </div>
                </div>
                </Container>
               
            <Footer />
        </Wrapper>
     );
}
 
export default HelpScreen;