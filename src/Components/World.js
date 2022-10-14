
import React from "react";
// function world(){
//         return(

//             <div>
//                 <h1>This is my second Component</h1>
//             </div>
//         )
// }

const world = () => {


    // return (
    //     <div>
    //         <h1>This is my second Component</h1>
    //     </div>
    // )

    return React.createElement(
		
        'div', {class: "xyz"},React.createElement(
        
            'h1',null,"It appears without JSX"
        )
    )

}
export default world;