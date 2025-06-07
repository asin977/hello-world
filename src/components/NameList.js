import React, { Component } from 'react'
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Peter','Peter']
    const nameList = names.map((name,index) => <h2 key= {index}>{index} {name}</h2>)
    return <div>{nameList}</div>
  }

// function NameList() {
//    const persons = [
//     {
//       id:1,
//       name : 'Bruce',
//       age : 30,
//       skill : 'React'
//     },{

//       id:1,
//       name : 'Clark',
//       age : 25,
//       skill : 'Angular'
//     },{

//       id:1,
//       name : 'Diana',
//       age : 28,
//       skill:'Vue'
//     },{
//       id:1,
//       name : 'Peter',
//       age : 22,
//       skill : 'JavaScript'
//     }

//    ]
//    const PersonList = persons.map(person => <Person key={person.name} person={person}/>)
//     return <div>{PersonList}</div>
// }

  
export default NameList;
