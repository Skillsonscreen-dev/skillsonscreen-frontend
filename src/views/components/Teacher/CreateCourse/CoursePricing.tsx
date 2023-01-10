import { Wrapper } from "../../../screens/teacher/courses/CreateCourse/styles";
import { useState } from 'react';

type formDataProps = {
    formData: {
        price: string,
    }
    setFormData: Function,
    page: number,
    setPage: Function,
}
const CoursePricing:React.FC<formDataProps> = (props: formDataProps) => {

    const handleChange = (evt: any) => {
        const name = evt.target.name;
        const value = 
        evt.target.value;
        props.setFormData({
          ...props.formData,
          [name]: value
        })
      }
    return ( 
        <Wrapper>
            <h5>Pricing</h5>
                <div className="price">
                        <p>Please select the price tier for your course below and click 'Save'.</p>

                    <p>
                    The default currency is Naira, if you have a different currency in your country, you can convert and select the Naira equivalent. If you intend to offer your course for free, the total length of video content must be less than 2 hours
                    </p>
                    <div className="money">
                        <div>NGN</div>
                        <input type="text" required name="price" placeholder="15,000" onChange={handleChange} id="" />
                    </div>
                </div>

                    <div className="save">
                        <button onClick={() => {}}>
                        Submit for Review
                        </button>
                    </div>

        </Wrapper>
     );
}


export default CoursePricing;