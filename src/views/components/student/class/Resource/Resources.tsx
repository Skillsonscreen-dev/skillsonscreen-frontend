import { Resource, Wrapper } from "./styles";
import Button from "../../../ui/button/Button";
import { BiFile } from "react-icons/bi";

const Resources: React.FC = (props) => {
    return (
        <Wrapper>
            <h4>Resources</h4>
            <div className="resources">
              <div className="chapters">
                <div className="chapter">
                    <h6>Chapter 1</h6>
                    <div className="resources-cards">
                        {
                            [1,2].map(num => (
                                <Resource>
                                    <div className="details" key={num}>
                                        <BiFile size={35} />
                                        <div className="info">
                                            <p>Pastries for beginners.pdf</p>
                                            <span>PDF file</span>
                                        </div>
                                    </div>
                                    <div className="download">
                                        <Button size="md" br={4}>Download</Button>
                                    </div>
                                </Resource>
                            ))
                        }                        
                    </div>                    
                </div>
                <div className="chapter">
                <h6>Chapter 2</h6>
                    <div className="resources-cards">
                        <Resource>
                            <div className="details">
                                <BiFile size={35} />
                                <div className="info">
                                    <p>Pastries for beginners.pdf</p>
                                    <span>PDF file</span>
                                </div>
                            </div>
                            <div className="download">
                                <Button size="md" br={4}>Download</Button>
                            </div>
                        </Resource>
                    </div>    
                </div>
                <div className="chapter">
                <h6>Chapter 3</h6>
                    <div className="resources-cards">
                        {
                            [1,2].map(num => (
                                <Resource>
                                    <div className="details" key={num}>
                                        <BiFile size={35} />
                                        <div className="info">
                                            <p>Pastries for beginners.pdf</p>
                                            <span>PDF file</span>
                                        </div>
                                    </div>
                                    <div className="download">
                                        <Button size="md" br={4}>Download</Button>
                                    </div>
                                </Resource>
                            ))
                        }                        
                    </div>    
                </div>
              </div>
            </div>
        </Wrapper>
    )
}

export default Resources;