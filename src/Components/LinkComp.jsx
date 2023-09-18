
import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Linkcomp = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <>
                    <div>
                        <Link to='/'><h1 className='HEADING' ><span>The</span> Siren</h1></Link>
                    </div>
            <header>
                <div className="container ">
                    <nav>
                        <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/bollywood">Bollywood</Link> </li>
                            <li><Link to="/technology">Technology</Link> </li>
                            <li><Link to="/hollywood">Hollywood</Link></li>
                            <li><Link to="/fitness">Fitness</Link> </li>
                            <li><Link to="/food">Food</Link></li>
                        </ul>
                        <button className='barIcon' onClick={() => setNavbar(!navbar)}> {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                        </button>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Linkcomp