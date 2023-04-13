import { useState } from "react";
import { Wrapper } from "./styles";

interface LoaderInterface {
    topColor?: string
    sideColor?: string
    styleTwo?: boolean
    topPadding?: string
    bottomPadding?: string
    center?: boolean
}
const Loader: React.FC<LoaderInterface> = ({topColor, sideColor, styleTwo = false, center = false, topPadding = "0px", bottomPadding = "0px"}) => {

    return (
        <Wrapper center={center} topPadding={topPadding} bottomPadding={bottomPadding} topColor={styleTwo ? "#3186C6" : topColor} sideColor={styleTwo ? "#CDF2FD" : sideColor} />
    );
}
 
export default Loader;