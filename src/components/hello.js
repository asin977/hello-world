import React from "react";

// const Hello = ()=> {
//     return (
//         <div>
//            <h1 className="dummyClass">Hello World</h1>
//         </div>
      
//     )
// }

// This is the JSX version of the Hello Comment


// const World = () => {
//     return React.createElement(
//         "div",null,React.createElement("h1",null,"Hello User")
//     )
// }
 
const World = () => {
    return React.createElement(
        "div",
        {id: "h1",className:'dummyClass'},
        React.createElement('h1',null,'Hello People!')
    )
}
export default World;
