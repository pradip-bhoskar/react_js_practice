//Parent.js:  passing props value
 
import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
const parent = () => {
        return (
                <div>
                        <h3> Parent Element</h3>
                        <Child1 name="Pradip" />
                        <Child2 age="25" />
                </div>
        )
}
export default parent;