import React from 'react'
import './Footer.css'
import Icon from '../icons.png'
import { useNavigate } from "react-router-dom"
function Footer() {
  const navigate = useNavigate();
  return (
    <div className='Footer'>

      <div className='FooterBox1'>
        <h1 className='FooterHEADING' ><span>The</span> Siren</h1>
        <p className='para'>The siren is indian Blog App which Provide News from all over India it contain Bollywood ,Technology,Hollywood,Fitness,Food news as well as top post,stories,article also.</p>
        <img src={Icon} className='Icon' />
      </div>
      <div className='FooterBox2'>
        <h2>Services</h2>
        <p className='Services' onClick={() => navigate("/bollywood")}>Bollywood</p>
        <p className='Services' onClick={() => navigate("/technology")}>Technology</p>
        <p className='Services' onClick={() => navigate("/hollywood")}>Hollywood</p>
        <p className='Services' onClick={() => navigate("/fitness")}>Fitness</p>
        <p className='Services' onClick={() => navigate("/food")}>Food</p>
      </div>
      <div className='FooterBox3'>
        <h2>Resources</h2>
        <p>Blog</p>
        <p>Help Center</p>
        <p>Contact Us</p>
      </div>
      <div className='FooterBox4'>
        <h2>Partners</h2>
        <p>TimesofIndia</p>
        <p>Hindustantimes</p>
        <p>Zeenews</p>
        <p>NDTV</p>
      </div>
<div className='FooterBox5'>
  <h1>Ready to get started?</h1>

<p>📱 +91-8047094800</p>
<p>📧 easupport@gmail.com</p>
</div>
    </div>
  )
}

export default Footer