import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Welcome() {

  const [state,setState]=useState()

  function logout(){
    localStorage.clear()
    window.location.reload()
  }

  const Loginstatus=JSON.parse(localStorage.getItem('jaiBharath'))
if(Loginstatus){
  var userId=Loginstatus.userId 
}
  useEffect(()=>{
axios.get(`http://localhost:3000/api/getData/${userId}`).then((data)=>{
  console.log("final answer",data.data);
  setState(data.data)
})
  },[])

  console.log("final *****************",state);

  return (
    <div>
      <h1>Welcome {state && state.firstname}</h1>
      <h3>{state && state.email}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Welcome
