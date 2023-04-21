import React from "react";
import './btn.css'
function Button({className, value , onClick}){
    return(
        <>
            <button className={className} onClick={onClick}>{value}</button>
        </>
    )
};

export default Button;