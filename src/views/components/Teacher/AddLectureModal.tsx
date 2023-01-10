import { Wrapper, AddLectureModalContainer } from './styles';
import { MdOutlineCancel } from 'react-icons/md'
const AddLectureModal: React.FC<{close: any}> = (props) => {
    return ( 
        <Wrapper>
            <AddLectureModalContainer onClick={() => props.close()}>
            <div className="close-btn" onClick={() => props.close()}>
                    <MdOutlineCancel />
                </div>
                <div className="modal">
                <h5>Chapter 01</h5>
                    <div className="lecture-detail">
                    <div className="">
                        <label htmlFor="institution">Content type</label>
                        <select name="type" required id="">
                            <option value="reading">
                                Reading
                            </option>
                            <option value="video">
                                Video
                            </option>
                            <option value="quiz">
                                Quiz
                            </option>
                        </select>
                    </div>
                    <div className="">
                        <label htmlFor="institution">Duration</label>
                        <input type="time" name="time"  id="" />
                        <select name="type" required id="">
                            <option value="minutes">
                                Minutes
                            </option>
                            <option value="hours">
                                Hours
                            </option>
                            <option value="quiz">
                                Quiz
                            </option>
                        </select>
                    </div>
                    </div>
                    <div className="upload">
                        <span>If you need further assistance <a href="">contact our support team</a></span>
                        <button>Upload</button>
                    </div>
                </div>
            </AddLectureModalContainer>           
        </Wrapper>
     );
}
 
export default AddLectureModal;