import React, { useState } from "react";
import Input from "./Input";
import Footer from "./Footer";
import MetaTags from 'react-meta-tags';


function Main(){
  
const [fname, setFirstName] = useState("");
const [lname, setLastName] = useState("");
const [fnameState, setfnameState] = useState(false);
const [email, setEmail] = useState("");

function handleChangeFirstName(event){
  setFirstName(event.target.value);
  setfnameState(true);
  if(event.target.value === ""){
    setfnameState(false);
  }
}
  
function handleChangeLastName(event){
  setLastName(event.target.value);
}

function handleChangeEmail(event){
  setEmail(event.target.value);
}
    return ( 
      <div> 
        <MetaTags><title>Strings tracker</title></MetaTags>

        <form className="form">
        <h1>{fnameState ? "Hello, " + fname + " " + lname : "Hello"}</h1>
        <p>{email}</p>
        <br />
        <Input type="text" value={fname} placeholder="First name" onChange={handleChangeFirstName}/>
        <Input type="text" value={lname} placeholder="Last name" onChange={handleChangeLastName}/>
        <Input type="text" value={email} placeholder="Email" onChange={handleChangeEmail}/>

        </form>
        <Footer />
      </div>
    )
}

export default Main;