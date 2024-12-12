import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import './header.css'

const Header = () => {

    let [clickHeader, clickHeaderSet] = useState({
        feature : false,
        solution : false,
    });
    function  openHeaderDrop(key) {
         

     
        clickHeaderSet((prevState)=>({
            ...prevState,
            [key]: !prevState[key],
        }))

        console.log(clickHeader);
        
        
    }

    let name = "harsh";


    return (
        <div>
            <div className='headermain'> 
            <h1>{clickHeader.solution}</h1>



                <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">Navbar</a> */}
                       {/* <img src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png" alt="" /> */}

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse just" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item feature" onClick={()=>openHeaderDrop('feature')}>
                                    <a className="nav-link active" aria-current="page" href="#">Feature <KeyboardArrowDownIcon sx={{fontSize:"22px"}} /></a>
                                      <div className={true ? 'abcd' : 'jjj'}>
                                          <div>hellow</div>
                                          <div>hellow</div>
                                          <div>hellow</div> 
                                          <div>hellow</div>
                                          <div>hellow</div>
                                          <div>hellow</div>
                                          <div>hellow</div>
                                          <div>hellow</div>
                                      </div>
 

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Solution</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Enterprise</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Resources</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>

                             
                                 
                            </ul>

                            <ul className="navbar-nav">
                               

                                <li className="nav-item ms-auto">
                                    <a className="nav-link" href="#"><SearchIcon sx={{fontSize:"20px"}} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                 
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
