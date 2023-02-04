import { Wrapper, AddLectureModalContainer } from './styles';
import { MdOutlineCancel } from 'react-icons/md'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState } from 'react';
import { IoMdAttach } from 'react-icons/io';

const AddLectureModal: React.FC<{close: any, index: any, formData: any}> = (props) => {
    const [lectureDetails, setLectureDetails] = useState({
        lectureType: 'reading',
        duration: '',
        timeType: '',
        video: '',
        readingData: ''
    })
    const selectVideo = (x: any) => {
        const file = x.target.files[0];
        const videourl = URL.createObjectURL(file);
        setLectureDetails({...lectureDetails, video: videourl})
        
      }
      const handleChange = (editor: any) => {
        console.log(editor)
        const data = editor?.getData()
        // setLectureDetails({...lectureDetails, readingData: data})
      }
    //   console.log(lectureDetails.readingData)
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
                    <CKEditor editor={ClassicEditor} data={lectureDetails.readingData}  onChange={handleChange}></CKEditor>
                    </div> : 
                    <div className="video">
                        <h4>Video Upload</h4>
                        <div className="img-container">
                            <div className="img-wrapper">
                                {
                                    lectureDetails.video ?  
                                        <video width="400" controls >
                                        <source src={lectureDetails.video} type="video/mp4"/>
                                        Your browser does not support HTML video.
                                       </video>
                               : <video width="400" controls >
                               <source src='/assets/img/video.mp4' type="video/mp4"/>
                              </video>
                                }
                                
                            </div>
                            <div>
                            <div className="file-name">
                            <label htmlFor="profile">File Name:</label>
                            <p>{lectureDetails.video}</p> <br />
                            </div>
                            <div className="file-name">
                            <label htmlFor="profile">Status:</label>
                            </div>
                            </div>
                            <div className="actions">
                                
                                <label htmlFor="video" className="btn-dark" >
                                <input type="file" accept="video/*" required onChange={selectVideo}  name="video" id="video" />
                                    <IoMdAttach/> Attach file
                                </label>    
                                <p>Note: All files should be at least <b>720p</b> and less than 4GB</p>                          
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