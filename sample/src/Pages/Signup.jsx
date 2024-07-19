import { useState } from 'react'
import axios from 'axios'
import './signup.css'
import { Link } from 'react-router-dom'
function Signup(){
    const [name,setName]=useState()
    const [lname,setLname]=useState()
    const [email,setEmail]=useState()
    const [mobile,setMobile]=useState()
    const [age,setAge]=useState()
    const [password,setPassword]=useState()

    async function display(){
    
            const data=await axios.post('http://localhost:3000/api/postData',{name,email,mobile,age,password,lname})
            console.log(data.data);
                    console.log("name value",name,email,mobile,age,password,lname)
        
;
    }

  

    return (
        <div className="main">
            <h1>Signup page</h1>
      <input type="text" placeholder="Username" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder="Lastname" onChange={(e)=>setLname(e.target.value)}/>
      <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
      <input type="number" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)}/>
      <input type="number" placeholder="age" onChange={(e)=>setAge(e.target.value)}/>
      <input type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
    <button style={{backgroundColor:"green",color:"white"}} onClick={display}>Signup</button>
    <Link to={'/'}><p>I have an already an account ?</p></Link>
        </div>
    )
}

export default Signup