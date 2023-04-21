import React from "react";
import './buttonbox.css'
function ButtonBox({children}){
    return(
        <>
            <div className="btnbox">{children}</div>
        </>
    )
}

export default ButtonBox;