import React, { useState, useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import './header.css'
import jsonData from '../../assets/header.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    var modal = '';

    let [clickHeader, clickHeaderSet] = useState({
        feature: false,
        featureFirst: false,

        solution: false,
    });
    function openHeaderDrop(key) {
        clickHeaderSet((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
            [key + 'First']: true,
        }))
        console.log(clickHeader);

        console.log(jsonData, "jsonDatajsonData");

    }





    let [statuss, setStatuss] = useState(false);




    const sharedContent = (
        <Row md={4}>

            {jsonData[0].feature.map((outerData, index) => (
                <Col>
                {
                    outerData.categoryArray.map((category,categoryIndex)=>( 
                        <Row xs={1}> 
                        <h6>{category.category}</h6>
                            {category.items.map((data, index) => (
                                <Col>
                                    <div key={index}>
                                        <p className='mb-0 '>{data.heading}</p>
                                        <p className='mb-0 text-secondary'>{data.subHeading}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    ))
                }
                   
                </Col>
            ))}

        </Row>
    );


    if (clickHeader.feature) {
        setTimeout(() => {
            setStatuss(statuss = true)
        }, 10);
        modal = <div className='modalOpen '>
            <div className={statuss ? 'moveDown' : 'firstTrans'} >
                {sharedContent}

            </div>
        </div>
    } else {

        console.log(clickHeader.featureFirst);

        if (clickHeader.featureFirst != '') {
            console.log("inside");

            setTimeout(() => {
                setStatuss(statuss = true);
            }, 10);
            modal = <div className='modalOpen '>
                <div className={statuss ? 'moveUp' : 'moveDown'} > {sharedContent}</div>
            </div>
        }
    }


    let name = "harsh";



    useEffect(() => {

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTo;
            // console.log("scrollTop=>", scrollTop); 
            if (scrollTop > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    let [isScrolled, setScroll] = useState(false);

    return (
        <div className='position-relative'>
            <div className={isScrolled ? 'fixed' : ''}>
                <div className={`headermain container`}>
                    <h1>{clickHeader.solution}</h1>
                    <nav className="navbar navbar-expand-lg navbar-light py-0">
                        <div className="container-fluid">
                            {/* <a className="navbar-brand" href="#">Navbar</a> */}
                            {/* <img src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png" alt="" /> */}

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse just" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item feature position-relative" onClick={() => openHeaderDrop('feature')}>
                                        <a className="nav-link active" aria-current="page" href="#">Feature <KeyboardArrowDownIcon sx={{ fontSize: "22px" }} /></a>
                                        {modal}


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
                                        <a className="nav-link" href="#"><SearchIcon sx={{ fontSize: "20px" }} /></a>
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
        </div>
    )
}

export default Header
