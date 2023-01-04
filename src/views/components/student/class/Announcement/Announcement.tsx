import { Announce, Wrapper } from "./styles";

const Announcement: React.FC = (props) => {
    return (
        <Wrapper>
            <h4>Announcement</h4>
            <div className="announcements">
                {
                    [1,2,3].map(num => (
                        <Announce border={num !== 3}>
                            <div className="header">
                                <img src="https://media.istockphoto.com/id/1127816715/photo/portrait-of-cheerful-young-businessman.jpg?s=612x612&w=0&k=20&c=7rIw06LoLpUVqQpoQkc2IiQZ4Edahfkqt3elc_KOPN8=" alt="writer" />
                                <span>Rowan Atkinson</span>
                                <span>|</span>
                                <span>last replied 25 days ago</span>
                            </div>
                            <div className="body">
                                <h6>Important! New course updates next week</h6>
                                <div className="content">
                                I will be reviewing the current course and coming up with a new updated on with more information and educational recsourcessI will be reviewing the current course and coming up with a new updated on with more information and educational recsourcessI will be reviewing the current course and coming up with a new updated on with more information and educational recsourcessI will be reviewing the current course and coming up with a new updated on with more information and educational recsourcess
                                </div>
                            </div>
                            {
                                num === 1 && (
                                    <div className="image">
                                        <img src="https://media.istockphoto.com/id/1130530775/photo/chocolate-brownie-preparation-on-kitchen-table.jpg?s=612x612&w=0&k=20&c=naVVUlyh2JFxBR5_4UQt9du7GJtu2bePAIGQZzoieaU=" alt="" />
                                    </div>
                                )
                            }                            
                        </Announce>
                    ))
                }
                
            </div>
        </Wrapper>
    )
}

export default Announcement;