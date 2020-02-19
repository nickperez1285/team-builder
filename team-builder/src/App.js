import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form"

const App=() =>  {

// const [member, setMember] = useState({
//   id: "",
//   name:""
// })

const [team, setTeam ]=useState([{
  key:1, name:"me" ,email: 'asdasd@asdas.com', role: 'nothing'},
   {key:2, name:"bob",email: 'asdasd@asdas.com', role: 'nothing'}, 
   {key:3, name:"you",email: 'asdasd@asdas.com', role: 'nothing'}
   ])

const addMember=person => {
  const newMember=  {
    key: Date.now(),
    name: person.name,
    email: person.email,
    role: person.role
  };
  setTeam([...team, newMember]);

};

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Form addMember={addMember} /> 

       <ul>
            {team.map(p => { 

                return <li> {p.name} <br/>  {p.email} <br/>  {p.role}</li>
            })}
          </ul>
      </div>
    )
  
}

export default App;
