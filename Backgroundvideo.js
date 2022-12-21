import React from 'react'

export default function Backgroundvideo() {
    return (
    <>
            <div className="formsec">


                <div className="backbloack">
                    <video className="backgroundvideo" autoPlay muted loop>
                        <source src="logos/background-video.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="mainblock">
                    <div className="formblock">

                        <h2>Admission Form</h2>
                        <p className="afc">Register online form for admission to your dream school.</p>

                        <div className="fmail">
                            <label htmlFor="email">Email</label><br/>
                                <input className="mailbox" type="email" id="email" name="email"/>
                                </div><br/>

                                    <div className="fmess">
                                        <label htmlFor="message">Message</label><br/>
                                            <textarea rows="7" cols="45" className="textbox" id="message" name="message"></textarea>
                                    </div><br/>
                                        <button className="btnsub">Submit</button>

                                    </div>
                                </div>
                        </div>
                    </>
                    )
}
