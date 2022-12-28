import { Wrapper } from "./styles";
import formatNumber from '../../../../../utils/numberFormatter';
import { useState } from "react";

const Transcript: React.FC = (props) => {
    const [ activeSection, setActiveSection ] = useState(0);
    return (
        <Wrapper>
            <h4>Transcript</h4>
            <div className="transcriptions">
               {
                    [0,1,2,3,4,5,].map(num => (
                        <div className={`section${num === activeSection? ' active': ''}`} onClick={() => setActiveSection(num)}>
                            <div className="time">00:{formatNumber(num*30).pad(1)}</div>
                            <div className="content">Hi. In this video,
                                we're going to explain user-centered design.
                                Why is it important that
                                designs are centered on the user?
                                Because the user buys and uses your product.
                                In addition, it's also important to solve
                                problems that people actually experience,
                                rather than only trying to solve
                                problems you personally experience.
                                Focusing on real user problems
                                reduces the impact of designer bias.
                                Larry Page, one of Google's founders,
                                highlighted just how important user-centered design
                                is when he said,
                                "There is no substitute for
                                personally watching and listening to real people."
                                At Google, we take this to heart.
                                Larry's statement has morphed into one
                                of Google's core values today:
                                Focus on the user and all else will follow.
                            </div>
                        </div>
                    ))
                    
                } 
            </div>
        </Wrapper>
    )
}

export default Transcript;