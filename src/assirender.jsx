import { useState } from "react";
import Assi from "./assi3";
import "./form.css"

export default function Render(){
    let [infos,setinfo]=useState([{name:"Krish",email:"abc@gmail.com",phone:"90XXXXXXXX",tech:"MERN Stack",text:"This is Amazing Tech Stack"}])
    let newinfo =(data) =>{
        setinfo((currdta)=>[...currdta,data])
    }
    return <>
        <h1>Workshop Registration</h1>
        <div className="container">
            <div className="left">
                <Assi addnewinfo={newinfo}/>
            </div>
            <div className="right">
                {infos.map((infos,idx)=>(
                    <div key={idx} className="card">
                        <h3>Name : {infos.name}</h3>
                        <h3>email : {infos.email}</h3>
                        
                        <h3>phone : {infos.phone}</h3>
                        <h3>techstack : {infos.tech}</h3>
                        <h3>Text : {infos.text}</h3>

                        <h3></h3>
                    </div>
                ))}    
            </div>    
        </div>    
    </>
}