import React from 'react'
import './NewPage.css'
import { Link } from 'react-router-dom'
function NewNav() {
    return (
        <div className='NewpgeNav'>
            <div>
                <Link to='/'><h1 className='NewHEADING' ><span>The</span> Siren</h1></Link>
            </div>
            
                    <div className='GetStart'>Get Started</div>
               
        </div>
    )
}

export default NewNav