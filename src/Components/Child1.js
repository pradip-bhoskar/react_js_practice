//  Child1.js :props using fuctional component

import React from "react";
const Child1 = (props)=>{
    return(

        <div>
            <h4> Name : {props.name}   --  using props in fuctional component  </h4>
        </div>
    )
}
export default Child1;
