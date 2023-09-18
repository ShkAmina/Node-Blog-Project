import React, { useEffect, useState } from 'react'
import { Store } from '../StoredData'
import { Link } from 'react-router-dom';
import "./BTHFF.css"
import TopFitness from '../TopPost/TopFitness';
import Linkcomp from '../LinkComp';
import axios from 'axios';

function Fitness() {
  const [FitnessData,setFitnessData]=useState("")
  useEffect(()=>{
    axios("https://node-blog-project-amina.onrender.com/api/new/data")
    .then((res)=>setFitnessData(res.data))
    .catch((err)=>console.log(err))

  },[])
  // const [Bdata] = useContext(Store);
  console.log(FitnessData)
  return (
    <>
    <Linkcomp/>
    <div className='TopPost'>
      <div>
        <h1 className='Cat'>Fitness
          <hr className='ShortLine' />
        </h1>
        {FitnessData && FitnessData.filter((item) => item.category === 'Fitness').map((data, index) => {
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
       
        <TopFitness/>
      </div>
    </div>


  </>
  )
}

export default Fitness