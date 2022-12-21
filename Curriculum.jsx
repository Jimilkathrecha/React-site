/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Curriculum() {
    return (
        <>
            <div>
                <div className="sec7heading">
                    <div>
                        <h1>Syllabus of Upstate high school by streams</h1>
                    </div>
                </div>


                <div className="sec7">

                    <div className="currhead">

                        <div className="currbtn">
                            <a className="currbtncon" type="button" name="answer" onClick="{showDiv(toggle1)}">Science</a>
                        </div>

                        <div className="currbtn">
                            <a className="currbtncon" type="button" name="answer" onClick="{showDiv(toggle2)}">Commerce</a>
                        </div>

                        <div className="currbtn">
                            <a className="currbtncon" type="button" name="answer" onClick="{showDiv(toggle3)}">Arts</a>
                        </div>

                    </div>


                    <div id="toggle1">
                        <div className="section-1">

                            <div className="chselect">
                                <div className="chblock">
                                    <div className="chcontent">hello sec 1.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">CH-1 Syllabus.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">CH-2 Syllabus.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">CH-3 Syllabus.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">CH-4 Syllabus.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">CH-5 Syllabus.</div>
                                </div>

                            </div>

                            <div className="currscrollbar">
                                <h2>Ch - 1</h2>
                                <ul className="currscrollcon">
                                    <li className="currscrollcon">Topic</li> <br />
                                    <blockquote className="csc"> bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </blockquote>
                                    <li className="currscrollcon">Topic</li> <br />
                                    <blockquote className="csc"> bla  bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </blockquote>
                                    <li className="currscrollcon">Topic</li> <br />
                                    <blockquote className="csc"> bla bla bla bla bla bla bla bla bla bla </blockquote>
                                    <li className="currscrollcon">Topic</li> <br />
                                </ul>
                            </div>


                        </div>
                    </div>





                    <div id="toggle2" style={{ display: "none" }}>
                        <div className="section-2">

                            <div className="chselect">
                                <div className="chblock">
                                    <div className="chcontent">hello sec 2.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">Syllabus progress uploaded.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">Syllabus progress uploaded.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">Syllabus progress uploaded.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">Syllabus progress uploaded.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">Syllabus progress uploaded.</div>
                                </div>

                            </div>

                            <div className="currscrollbar">

                            </div>

                        </div>
                    </div>


                    <div id="toggle3" style={{ display: "none" }}>
                        <div className="section-3">

                            <div className="chselect">
                                <div className="chblock">
                                    <div className="chcontent">hello sec 3.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">Syllabus progress uploaded.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">Syllabus progress uploaded.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">Syllabus progress uploaded.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">Syllabus progress uploaded.</div>
                                </div>

                                <div className="chblock">
                                    <div className="chcontent">Syllabus progress uploaded.</div>
                                </div>

                            </div>

                            <div className="currscrollbar">

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
