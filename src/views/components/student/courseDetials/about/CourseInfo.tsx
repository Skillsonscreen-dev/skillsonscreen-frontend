import { Wrapper } from './styles';

const CourseAboutSection: React.FC = () => {
    let content = `
        <strong>Do you love baking? Do you know much about baking?</strong>
        <p>In this course I am going to show you step by step how to bake easily at home. How to make delicious recipes for your family and your friends to enjoy. Everything will be explained from the ingredients and the steps. You will learn to make the recipes with different tastes. You don't need fancy equipment to make these recipes. You will need an oven, bread loaf pans, mixing bowls, spoons and an electric mixer. So come and join me to learn how to bake together.</p>
        <p>Baking at home can deliver a lot of joy to our friends and family. I believe if you truly love and are fascinated by baking. You can make things that are much better than the store-bought ones in your home kitchen and I’m sure I can help you by guiding you throughout this class.</p>
        <br />       
        <p>You'll also find several recipes in the course for doughs,fillings and frostings. The course focuses on the tiny details, including all of the basics as well as more advanced tips to help you as you continue on your baking and cake decorating journey. With close-up video and simple, step-by step instructions, you'll find each technique broken down into easy-to-follow steps. You can watch the modules whenever you choose and download or print the included recipes and quick reference guides, which are handouts for each module with photos and descriptions of every step.</p>
    `
    return (
        <Wrapper>
            <h3>About this course</h3>
            <div className="content" dangerouslySetInnerHTML={{__html: content}}>
            </div>
        </Wrapper>
    )
}

export default CourseAboutSection;