import { useState } from "react";
import { Wrapper } from "./styles";

interface LoaderInterface {
    topColor?: string
    sideColor?: string
    styleTwo?: boolean
    topPadding?: string
    bottomPadding?: string
}
const Loader: React.FC<LoaderInterface> = ({topColor, sideColor, styleTwo = false, topPadding = "0px", bottomPadding = "0px"}) => {

    return (
        <Wrapper topPadding={topPadding} bottomPadding={bottomPadding} topColor={styleTwo ? "#3186C6" : topColor} sideColor={styleTwo ? "#CDF2FD" : sideColor} />
    );
}
 
export default Loader;