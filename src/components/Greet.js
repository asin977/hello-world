import React from 'react';

// function Greet() {
//     return <h1>Hello Vishwas</h1>
// }

// const Greet = (props) => 
// {
// console.log(props);

// return (
//     <div>
//        <h1>Hello {props.name} a.k.a {props.heroname}</h1>
//        {props.children}
//     </div>
    
// )
// }   -/// Using the destructuring method
// const Game = ({name,heroName}) => {
//     return (
//         <div>
//             <h1>
//                 Hello {name} a.k.a {heroName}
//             </h1>
//         </div>
//     )
// }
// export default Game;


const Greet = props => {
    const {name,heroName} = props;
    return (
        <div>
            <h1>
                Hello How are you {name} and your superhero {heroName};
            </h1>
        </div>
    )
}
export default Greet;

