
import React from 'react';

export default function Header() {
    return (
    <>
        <header>

            <ul className="sec1">

                <li className="loc">
                    <img alt="" src="logos/location-icon-.png"/>
                </li>

                <li className="one"><a href="hello">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;795 South Park Avenue. CA 94107.</a></li>

                <li className="two"><a href="hello">Have Question</a></li>

                    <div className="vl"></div>
                    <div className="v2"></div>
                    <div className="v3"></div>
                    <div className="v4"></div>
                    <div className="v5"></div>
                    <div className="v6"></div>
                    <div className="v7"></div>
                    <div className="v8"></div>

                <li className="three">

                    <img alt="" className="fb" src="logos/facebook-logo.png"/>

                    <img alt="" className="tw" src="logos/twitter-logo.png"/>

                    <img alt="" className="ld" src="logos/linkedin-logo.png"/>

                    <img alt="" className="it" src="logos/insta -logo.png"/>
                    
                </li>



                <li className="flag">
                    <img alt="" className="flagimg1" src="Flag imgs/american-flag.jpg"/>
                </li>

                <li className="dropdown1">
                    <a style={{padding:"12px 16px 12px 16px"}} href="hello" className="dropbtn1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English</a>
                    <div className="dropdown-content1">
                        <img alt="" className="flagimg" src="Flag imgs/Brazil_flag_300.png"/>
                            <a href="hello">Brazil</a>
                        <img alt="" className="flagimg" src="Flag imgs/Flag_of_Canada.png"/>
                            <a href="hello">Canada</a>
                        <img alt="" className="flagimg" src="Flag imgs/france_flag.png"/>
                            <a href="hello">France</a>
                    </div>
                </li>

                <li className="five"><a href="hello">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login</a></li>

                <li className="login">
                    <img alt="" className="logimg" src="logos/user-icon.png"/>
                </li>
                <li className="six"><a href="hello">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register</a></li>

                <li className="register">
                    <img alt="" className="regimg" src="logos/user-register-.png"/>
                </li>

            </ul>






            <ul className="section">

                <li><img alt="" className="logo" src="logos/school logo.jpg" href="nav demo.html"/></li>

                <li ><img alt="" className="call" src="logos/call logo.jpg"/></li>

                <li className="sone">

                    <p >contact now</p>
                    <h3 >123-45-678</h3>
                </li>

                <li>
                    <img alt="" className="mail" src="logos/mail logo.jpg"/>
                </li>

                <li className="stwo">
                    <p>Enquire now</p>
                    <h3> abc@gmail.com</h3>
                </li>

                <li className="form">
                    <img alt="" className="sform" src="logos/btn-form-logo.png"/>
                </li>

                <li>
                    <a className="btn" href="hello" target="_blank">APPLY NOW</a>
                </li>

            </ul>

            <ul className="sthree">

                <li className="dropdown2">
                    <a href="hello" className="dropbtn2">Home</a>
                </li>

                <li className="dropdown2">
                    <a href="hello" className="dropbtn2">Gallary</a>
                </li>

                <li className="dropdown2">
                    <a href="hello" className="dropbtn2">Event</a>
                    <div className="dropdown-content2">
                        <a href="hello">Diwali Festival</a>
                        <a href="hello">Kite Festival</a>
                        <a href="hello">Holi Celibration</a>
                    </div>
                </li>

                <li className="dropdown2">
                    <a href="hello" className="dropbtn2">Admission Form</a>

                    <div className="dropdown-content2">
                        <a href="hello">Submit form</a>
                        <a href="hello">Enquiry form</a>
                    </div>
                </li>

                <li className="dropdown2">
                    <a href="hello" className="dropbtn2">Student Portfolio</a>
                    <div className="dropdown-content2">
                        <a href="hello">schedule</a>
                        <a href="hello">Result board</a>
                        <a href="hello">Parent meeting</a>
                    </div>
                </li>

                <li className="dropdown2">
                    <a href="hello" className="dropbtn2">About us</a>

                </li>

                <li className="svgo">
                   
                </li>

                <li className="svgt">
                   
                </li>

                <li className="svgh">
                    
                </li>
            
            </ul>
            
        </header>
       
    </>
    )
}
