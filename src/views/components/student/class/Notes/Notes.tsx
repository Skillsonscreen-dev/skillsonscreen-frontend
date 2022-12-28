import { Chapter, FilterContent, Wrapper } from "./styles";
import React, { useState } from "react";
import Button from "../../../ui/button/Button";
import { BsPlusCircleFill } from "react-icons/bs";
import Select, { Option } from "../../../ui/select/Select";
import InfoPill from "../../../ui/infoPill/InfoPill";

const Notes: React.FC = (props) => {
    const [ note, setNote ] = useState('');
    const [ showTextArea, setShowTextArea ] = useState(false);
    
    const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(e.currentTarget.value);
    }
    return (
        <Wrapper>
            <h4>Notes</h4>
            <div className="notes">
               <div className="create-note">
                    {
                        !showTextArea && (
                            <div className="btn-wrapper">
                                <Button br={4} size="md" onClick={() => setShowTextArea(true)}>
                                    <div className="button-content">
                                        <BsPlusCircleFill color="#F7F9FA" size={17} /> Create a note
                                    </div>                                    
                                </Button>
                            </div>
                        )
                    }
                    {
                        showTextArea && (
                            <div className="text-area-wrapper"> 
                                <div className="header">
                                    <span>Your note</span>
                                    <span className="note-length">{note.length}/1000</span>
                                </div>
                                <textarea name="" id="" rows={10} onChange={handleNoteChange} value={note} maxLength={1000}>
                                    {note}
                                </textarea>
                                <div className="footer">
                                    <Button br={4} variant="outline" size="md" onClick={() => setShowTextArea(false)}>
                                        Cancel
                                    </Button>
                                    <Button br={4} size="md">Save note</Button>
                                </div>
                            </div>
                        )
                    }
               </div>

               <div className="created-notes">
                    <FilterContent>
                        <div className="filter">
                            <Select title="Filter" br={4}>
                                <Option value="">Most recent</Option>
                            </Select>
                        </div>
                        <div className="sort">
                            <div className="sort-buttons">
                                <span className="sort-item">Sort By:</span>
                                <Button className="sort-item" variant="outline" color="dark" br={4}>Current lecture</Button>
                                <Button className="sort-item" variant="outline" color="light" br={4}>All lectures</Button>
                            </div>
                            <div className="sort-dropdown">
                                <Select title="Sort By" br={4}>
                                    <Option value="">Current lecture</Option>
                                    <Option value="">All lectures</Option>
                                </Select>
                            </div>
                        </div>
                    </FilterContent>
                    <div className="chapters">
                        {
                          [0,1,2].map(num => (
                            <Chapter>
                                <div className="header">
                                    <span>Chapter 1</span><span className="title">Introduction to Pastries</span>
                                </div>
                                <div className="body">
                                    <div className="time">
                                        <InfoPill color="black" br={4} size={'xs'}><span className="info-content">00:15</span></InfoPill>
                                    </div>
                                    <div className="content">
                                        The tutor talks about the backgroundUser-centered design puts the user front and center.
                                        Focusing on the user means
                                        considering their story, emotions,
                                        and the insights you've gathered about them.
                                        To keep our focus on the user,
                                        the user-centered design process has four steps:
                                        understand, specify, design, and evaluate.
                                        Following this framework helps us build
                                        products people actually want to use.
                                        First, understand how the user
                                        experiences the product or similar products.
                                        Really understanding the end user

                                    </div>
                                </div>
                            </Chapter>
                          ))
                        }                        
                    </div>
               </div>
            </div>
        </Wrapper>
    )
}

export default Notes;