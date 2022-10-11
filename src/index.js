import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
//import { Greeting, Usercard } from "./Greeting";
//import Product, { Navbar } from "./Product";
//import {Button} from "./Button";
//import {TaskCard} from "./Task";
import "./task.css";
//import image from './assets/images/banda1.jpg';
//import {Saludar} from './Saludar'
//import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

//const users = [
//  {
//    id: 1,
//    name: "Ryan Raynolds",
//    image: "https://robohash.org/user2",
//  },
//  {
//    id: 2,
//    name: "John Doe",
//    image: "https://robohash.org/user1",
//  },
//  {
//    id: 3,
//    name: "Jane Doe",
//    image: "https://robohash.org/user3",
//  },
//];

function Counter(){

    const [ counter, setCounter ] = useState(0)
  
  
  return (<div><h1>Counter: {counter}</h1>
      <button onClick={() =>{
        setCounter(counter + 1)
      }}>
        Sumar
      </button>
      <button onClick={() =>{
        setCounter(counter - 1)
      }}>
        Restar
      </button>
     
      <button onClick= {()=>{
        setCounter(0)
      }}>
        Reinicia
      </button>
      <br/><br/>
      </div>
      
      )
}

function Counter1() {
      const [mensaje, setMensaje] = useState('')
      const [counter, setCounter] = useState(0)

      useEffect(() => {
        console.log('render')
      }, [])

      return (
      <div>
      <input onChange={e => setMensaje(e.target.value)}/>
      <button onClick={()=> {
        alert('Hola: ' + mensaje)
      }}>
        Save
      </button>

      <hr/>
      <h1>Counter: {counter} </h1>
      <button onClick={()=>setCounter(counter + 1 )}>
        Incrementar
      </button>


  </div>
  )
}


    
  



root.render(
  <>
    {/* <Usercard 
    name ='Ronaldo' 
    amount={3000} 
    married={true} 
    points={[1, 2, 3]}
    address={{street: '123 Main Street', city:"New York"}}
    greet = {function () {alert("Hello")}}
    />
<Usercard 
    name ='Messi' 
    amount={10000} 
    married={false} 
    points={[100, 200, 300]}
    address={{street: '123 not Main Street', city:"Paris"}}
    greet = {function () {alert("Hello")}}
    /> */}
    {/* <Button text="Click me" />
    <Button text="Buy me"/>
    <Button text="" name="JOE"/>  */}

    {/* <TaskCard ready ={true}/> <img className="w-101" src={image} alt="Digital House" width="20%"/>
<Saludar/>
<Button text="Saludar"/>

<form onSubmit={(e) => {
  e.preventDefault()
  alert('enviado')
}}>
  <h1>Registro de usuario</h1>
  <button>Send</button>
</form> */}
    
    {/* <Post /> */}

    {/* {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} alt='' /> 
        </div>
      );
    })} */}
    <Counter/>
    <Counter1/>
  </>
);
