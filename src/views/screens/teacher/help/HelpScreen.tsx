import THeader from '../../../components/Teacher/TeacherHeader'
import Footer from '../../../components/footer/Footer';
import { Container, Wrapper } from './styles';
import TeacherDashboardHeader from '../../../components/Teacher/dashboardHeader';
import { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
const HelpScreen: React.FC = () => {
    const faqs = [
        { id: 0, title: 'Creating a course ', answer: 'lorem srdtfyguhjknjbhvgcfxdzsretfyguhjnbn bvcfxghjk'},
        { id: 1, title: 'How to become a premium Tutor', answer: 'lorem srdtfyguhjknjbhvgcfxdzsretfyguhjnbn bvcfxghjk'},
        { id: 2, title: 'How much do I make as a Tutor ', answer: 'lorem srdtfyguhjknjbhvgcfxdzsretfyguhjnbn bvcfxghjk'},
        { id: 3, title: 'How do I promote my course to gain more students', answer: 'lorem srdtfyguhjknjbhvgcfxdzsretfyguhjnbn bvcfxghjk'},
        { id: 4, title: 'Privacy and copywrite policy on my content', answer: 'lorem srdtfyguhjknjbhvgcfxdzsretfyguhjnbn bvcfxghjk'}
    ]

    const [ showFaq, setShowFaq ] = useState<any>({});

    const toggleShowFaq = (faq: number) => {
        setShowFaq({
            ...showFaq,
            [faq]: !showFaq[faq]
        })
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
                        <div className="faq" onClick={() => { toggleShowFaq(f.id) }} key={f.title}>
                            <div className="info">
                            <p className='title'>{f.title}</p>
                            <div className="icon">
                                {
                                    showFaq[f.id] ? <AiOutlineMinusCircle />:
                                    <AiOutlinePlusCircle />
                                } 
                            </div> 
                            
                            </div>
                            <span>
                                {
                                    showFaq[f.id] && (
                                        <p className='ans'>{f.answer}</p>
                                    )
                                }
                            </span>
                        </div>
                    ))
                }
                </div>
                </div>
                <div className="contact">
                <h4>Contact Us</h4>
                <form className='contact-form'>
                    <div className="half">
                    <div className="email">
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input type="email" />
                    </div>
                    <div className="subject">
                        <label htmlFor="subject">SUBJECT</label>
                        <input type="text" />
                    </div>
                    </div>
                    <div className="message">
                        <label htmlFor="message">MESSAGE</label>
                        <textarea name="message" id=""></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                </div>
                <div className="speak">
                <h4>Speak with us</h4>
                <div className="speak-container">
                    <div className="speak-item">
                        <div className="img-wrapper">
                            <img src="/assets/img/whatsapp-svg.svg" alt="whatsapp icon" />
                        </div>
                        <div>
                            <p>Whatsapp</p>
                            <a href="https://wa.me/08000000000">0800-000-0000</a>
                            <a href="https://wa.me/08000000000">0800-000-0000</a>
                        </div>
                    </div>
                    <span className="line"></span>
                    <div className="speak-item">
                        <div className="img-wrapper">
                            <img src="/assets/img/phone-svg.svg" alt="phone icon" />
                        </div>
                        <div>
                            <p>Phone</p>
                            <a href="tel:+2348000000000">0800-000-0000</a>
                            <a href="tel:+2348000000000">0800-000-0000</a>
                        </div>
                    </div>
                    <span className="line"></span>
                    <div className="speak-item">
                        <div className="img-wrapper">
                            <img src="/assets/img/email-svg.svg" alt="phone icon" />
                        </div>
                        <div>
                            <p>Email address</p>
                            <a href="mailto:hello@skillsonscreen.com">hello@skillsonscreen.com</a>
                        </div>
                    </div>
                </div>
                </div>
                </Container>
               
            <Footer />
        </Wrapper>
     );
}
 
export default HelpScreen;