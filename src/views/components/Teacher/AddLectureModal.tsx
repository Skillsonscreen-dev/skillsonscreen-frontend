import { Wrapper, AddLectureModalContainer } from './styles';
import { MdOutlineCancel } from 'react-icons/md'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState } from 'react';

const AddLectureModal: React.FC<{close: any, index: any, formData: any}> = (props) => {
    const [readingData, setreadingData] = useState()
    const [lectureVideo, setlectureVideo] = useState('')
    const [lectureDetails, setLectureDetails] = useState({
        lectureType: '',
        duration: '',
        timeType: '',
        video: '',
    })
    const selectVideo = (x: any) => {
        const input = x.target.files;
        setlectureVideo(input[0]) ;
        if (input && input[0]) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            setlectureVideo(e.target.result);
            lectureDetails.video = e.target.result
          };
          reader.readAsDataURL(input[0]);
        }
        
      }
    return ( 
        <Wrapper>
            <AddLectureModalContainer>
            <div className="close-btn" onClick={() => props.close()}>
                    <MdOutlineCancel />
                </div>
                <div className="modal">
                <h5>Chapter 01</h5>
                    <div className="lecture-details">
                    <div className="">
                        <label htmlFor="lectureType">Content type</label>
                        <select name="lecturetype" required id="" onChange={(e) => {
                                    setLectureDetails({...lectureDetails, lectureType: e.target.value})
                                }}>
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
                        <label htmlFor="duration">Duration</label>
                        <span className="duration">
                        <input type="time" name="time"  id="" onChange={(e) => {
                                    setLectureDetails({...lectureDetails, duration: e.target.value})
                                }}></input> 
                        <select name="timeType" required id="" onChange={(e) => {
                                    setLectureDetails({...lectureDetails, timeType: e.target.value})
                                }}>
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
                        </span>
                    </div>
                    </div>
                    {
                        lectureDetails.lectureType === 'reading' ?
                        <div className="editor">
                    <CKEditor editor={ClassicEditor} data={readingData}></CKEditor>
                    </div> : 
                    <div className="video">
                        <h4>Video Upload</h4>
                        <div className="img-container">
                            <div className="img-wrapper">
                                {
                                    lectureVideo ?  
                                        <video width="500" height="500" controls >
                                        <source src={lectureVideo} type="video/mp4"/>
                                        Your browser does not support HTML video.
                                       </video>
                               : <video width="500" height="500" controls >
                               <source src={lectureVideo} type="video/mp4"/>
                              </video>
                                }
                                
                            </div>
                            <div>
                            <div className="file-name">
                            <label htmlFor="profile">File Name:</label>
                            <p>{lectureVideo}</p>
                            </div>
                            <div className="file-name">
                            <label htmlFor="profile">Status:</label>
                            {/* p */}
                            </div>
                            <div className="actions">
                                
                                <label htmlFor="image" className="btn-primary" >
                                <input type="file" accept="video/*" required onChange={selectVideo}  name="image" id="image" />
                                        Upload photo
                                </label>                              
                            </div>
                            <p>Maximum file size 1MB  File format JPEG, PNG or GIF</p>
                            </div>
                        </div>
                    </div>
                    }
                    
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