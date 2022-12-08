import  THeader from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer';
import { Container, Wrapper } from './styles';
import TeacherDashboardHeader from '../../../components/Teacher/dashboardHeader';
import PerformanceGraph  from '../../../components/Teacher/performanceGraph';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
const PerformanceScreen: React.FC = () => {
    return ( 
        <Wrapper>
            <THeader />
            
                <Container>
                <TeacherDashboardHeader/>
                <div className="performance">
                    <h4>Performance</h4>
                    <div className="performance-cards">
                        <div className="card">
                            <p>Total students</p>
                            <h2>1,234</h2>
                            <span>
                            <p className="small"><b>24</b> this month</p>
                            <button className='good-perfomance'>
                            <BsArrowUpCircle /> 25%
                            </button>                      
                            </span>
                        </div>
                        <div className="card">
                            <p>Currently enrolled</p>
                            <h2>910</h2>
                            <span>
                            <p className="small"><b>17</b> this month</p>
                            <button className='good-perfomance'>
                            <BsArrowUpCircle /> 45%
                            </button>                      
                            </span>
                        </div>
                        <div className="card">
                            <p>Certified students</p>
                            <h2>322</h2>
                            <span>
                            <p className="small"><b>5</b> this month</p>
                            <button className='bad-perfomance'>
                            <BsArrowDownCircle /> 25%
                            </button>                      
                            </span>
                        </div>
                    </div>
                    <div className="performance-graph">
                        <div className="title">
                            <h4>Students Enrolled</h4>
                            <div className="view">
                                <h5>View:</h5>
                                <button>Monthly</button>
                                <button>Bi-yearly</button>
                                <button>Yearly</button>
                            </div>
                        </div>
                        <PerformanceGraph />
                    </div>
                </div>
                </Container>
            <Footer />
        </Wrapper>
     );
}
 
export default PerformanceScreen;