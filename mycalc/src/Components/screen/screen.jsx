import React from "react";
import { Textfit } from "https://cdn.skypack.dev/react-textfit@1.1.1";
import './screen.css'
function Screen({value}){
    return(
        <>
            <Textfit className='screen' mode='single' max={70} >{value}</Textfit>
        </>
    )
}

export default Screen;