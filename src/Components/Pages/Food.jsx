import React, { useEffect, useState } from 'react'
// import { Store } from '../StoredData'
import { Link } from 'react-router-dom';
import "./BTHFF.css"
import TopFood from '../TopPost/TopFood';
import Linkcomp from '../LinkComp';
import axios from 'axios';

function Hollywood() {
  const [FoodData,setFoodData]=useState("")
  useEffect(()=>{
    axios("https://node-blog-project-amina.onrender.com/api/new/data")
    .then((res)=>setFoodData(res.data))
    .catch((err)=>console.log(err))

  },[])

  console.log(FoodData)
 
  return (
    <>
    <Linkcomp/>
    <div className='TopPost'>
      <div>
        <h1 className='Cat'>Food
          <hr className='ShortLine' />
        </h1>
        {FoodData && FoodData.filter((item) => item.category === 'Food').map((data, index) => {
          return (
           
              <div key={index}>
                <div className='News'>
                  <div>
                    <img className='NewsImg' src={data.image} alt="Loading" />
                  </div>
                  <div className='Containt'>
                    <Link to={`/NewPage/${data.heading}`} state={data}>
                      <h2 className='TopHeadings'>{data.heading.slice(0,100)}</h2>
                    </Link>
                    <p>{data.description.slice(0,300)}.....</p>

                  </div>
                </div>
                <hr />
              </div>
          )
        })}
      </div>
      <div>
       
        <TopFood/>
      </div>
    </div>


  </>
  )
}

export default Hollywood