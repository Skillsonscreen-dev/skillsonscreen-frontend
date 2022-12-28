import THeader from '../../../components/Teacher/TeacherHeader'
import Footer from '../../../components/footer/Footer';
import { Container, Wrapper } from './styles';
import TeacherDashboardHeader from '../../../components/Teacher/dashboardHeader';
import PerformanceGraph  from '../../../components/Teacher/performanceGraph';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { TbCurrencyNaira } from 'react-icons/tb';
const FinanceScreen: React.FC = () => {
    return ( 
        <Wrapper>
            <THeader />
            
                <Container>
                <TeacherDashboardHeader/>
                <div className="finance">
                    <h4>Finance and courses</h4>
                    <div className="cards">
                        <div className="balance-card">
                            <p>Account Balance</p>
                            <span><TbCurrencyNaira/><h2>800k</h2></span>
                            <button className='withdrawal'>
                            Process Withdrawal
                            </button>                      
                        </div>
                        <div className="card">
                            <p>Total revenue</p>
                            <div className='money'><TbCurrencyNaira/><h2>2.2m</h2></div>
                            <span>
                            <p className="small"><b>N120K</b> this month</p>
                            <button className='good-perfomance'>
                            <BsArrowUpCircle /> 25%
                            </button>                      
                            </span>
                        </div>
                        <div className="card">
                            <p>Total withdrawal</p>
                            <div className='money'><TbCurrencyNaira/><h2>1.4m</h2></div>
                            <span>
                            <p className="small"><b>N500K</b> this month</p>                     
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
 
export default FinanceScreen;