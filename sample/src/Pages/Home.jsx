import { useEffect, useState } from "react"
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import axios from 'axios'

function Home(){

    const [state,setState]=useState([])

    useEffect(()=>{
       async function hello(){
            const apiData=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            console.log("********",apiData.data.categories);
            setState(apiData.data.categories)
        }
        hello()
     
    },[])
    console.log("state value in home page",state);
    return(
        <>
        <Navbar/>
        {state.map((li)=>(
            <>
            <h1>{li.strCategory}</h1>
            <img src={li.strCategoryThumb} alt="" />
            </>
        ))}

<Footer/>
</>
    )
}

export default Home