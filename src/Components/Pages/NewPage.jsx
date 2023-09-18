import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./NewPage.css"
import Avtar from '../avtar1.jpg'
import Icons from '../icons.png'
import IMG from "../back.png"
import Clapps from '../clapping.png'
import Share from '../share.png'
import NewNav from './NewNav'
import Footer from './Footer'
function NewPage() {
    const Nav = useNavigate();
    const Loc = useLocation().state
    return (
        <>
        <NewNav/>
               
            <div className='NewPage'>
                <div className='NewPageIcons'>
                    <div className='clappsshareicon'>
                        <img className='iconsnewpage' src={Clapps} alt="" />
                        <img className='iconsnewpage' src={Share} alt="" />
                    </div>
                    <div >
                        <p>9.3K</p>
                        <p>Share this article</p>
                    </div>
                </div>

                <div>
                    <div className="profile">
                        <div className='proflex'>
                            <img className="bckcolor" src={Avtar} alt="" />
                            <div style={{ marginLeft: "15px" }}>
                                <h4>Hamza Shaikh</h4>
                                <p>11,2023.10 min read.</p>
                            </div>
                        </div>
                        <div>
                            <img className="bckcolor" src={Icons} alt="" />
                        </div>
                    </div>
                    <div className='NewPageContent'>
                        <img className="NewPageImg" src={Loc.image} alt='Image Loading...'></img>
                        <h1 className='newsheading'>
                            {Loc.heading}
                        </h1>
                        <p className='containt'>
                            {Loc.description}
                        </p>

                        <h1 onClick={() => { Nav(-1) }} className="BacktoHome" >

                            <img className='IMG' src={IMG} />Back

                        </h1>
                    </div>
                </div>

            </div>
<Footer/>

        </>
    )
}

export default NewPage