import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './test.css'
function Test() {

    const [state,setState]=useState([])

    useEffect(()=>{
  axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((apiData)=>{
    console.log(apiData);
    console.log("api values",apiData.data.categories);
    setState(apiData.data.categories)

  })
    },[])

    console.log(state,"final value");

  return (
    <div className='hello'>
{state.map((li)=>{
    return(
    <div key={li.idCategory}>
    <h3>{li.strCategory}</h3> 
    <img src={li.strCategoryThumb} alt="" />
    <p>{li.strCategoryDescription}</p>
    </div>
    )
})}
    </div>
  )
}

export default Test
