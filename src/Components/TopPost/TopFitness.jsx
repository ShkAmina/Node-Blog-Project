import React,{useEffect, useState } from "react";
// import {Store} from '../StoredData'
import { Link } from "react-router-dom";
import "../Pages/BTHFF.css"
import axios from 'axios';

function TopFitness(){
  const [TopfitnessData,setTopfitnessData]=useState("")
  useEffect(()=>{
    axios("https://node-blog-project-amina.onrender.com/api/new/data")
    .then((res)=>setTopfitnessData(res.data))
    .catch((err)=>console.log(err))

  },[])
  // const [Bdata] = useContext(Store);
//   console.log(TopfoodData)

// const [topFood]=useContext(Store);
    // console.log(TopfitnessData);

    return(
        <>
         <h1 className='Cat'>TopPost
            <hr className='ShortLine' />
          </h1>
        <div className="TopPostBollywood">
      
        {TopfitnessData && TopfitnessData.filter((item) => item.category === 'Fitness').map((data, index) => {
            return (
             
                <div key={index}>
                  <div className='TNews'>
                    <div>
                      <img className='TNewsImg' src={data.image} alt="Loading" />
                    </div>
                    <div className='TContaint'>
                      <Link to={`/NewPage/${data.heading}`} state={data}>
                        <h2 className='TTopHeadings'>{data.heading.slice(0,100)}</h2>
                      </Link>
                      <p>{data.description.slice(0,200)}</p>

                    </div>
                  </div>
                  <hr />
                </div>
            )



          })}
        
            </div>
        </>
    )
}
export default TopFitness