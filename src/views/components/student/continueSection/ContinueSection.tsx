import ProgressBar from '../../progressBar/ProgressBar';
import { CourseCard, ContinueWrapper, SectionContainer } from './styles';

const ContinueSection: React.FC = () => {
    return (
        <SectionContainer>        
            <div className="sec-header">
              <h3 className="sec-title">Continue from where you stopped</h3>
              <a href="#">My Courses</a>
            </div>
            <ContinueWrapper>
            {[1,2].map((item, index) => {
                return (
                    <CourseCard key={index}>
                        <div className="img-wrapper">
                            <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" alt="course image" />
                        </div>
                        <div className="content">
                            <div>
                                <p>Pig Farming</p>
                                <h3>Piggery for Beginners</h3>
                                <div className='progress'>
                                    <ProgressBar progress={80} />
                                    <span>80%</span>
                                </div>
                            </div>   
                            <div className="foot-col">
                                <span className='foot-lead'>Up Next</span>
                                <div>
                                    <strong>Terminology for Piggery</strong>
                                    <div>
                                        Lecture  |  <span> 5mins left</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </CourseCard>
                )
            })}
            </ContinueWrapper>
        </SectionContainer>
    )
}

export default ContinueSection;