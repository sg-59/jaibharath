import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import axios from 'axios'

function Login(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()



    function Logindata(){
        axios.post('http://localhost:3000/api/login',{email,password}).then((data)=>{
            console.log(data.data);
            data.data.message && window.location.reload() 
            localStorage.setItem("jaiBharath",JSON.stringify(data.data))

        }).catch((err)=>{
            console.log("369",err.response);
        })
   
    }

    return(
<div className='login'>
    <h1>Login form</h1>
<input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
<input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
<button onClick={Logindata}>Login</button>
<Link to={'/signup'}><p>create a new account ?</p></Link>
</div>
    )
}

export default Login