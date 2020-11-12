import React, { Component } from 'react'

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <section class="colorlib-skills" data-section="gallery">
                    <div class="colorlib-narrow-content gallery">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <span class="heading-meta">Gallery</span>
                                <h2 class="colorlib-heading animate-box fadeInUp animated">Gallery</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">
                                    <img src="images/p1.jpg" style={{ width: "100%" }} />
                                    <img src="images/p2.jpg" style={{ width: "100%" }} />                                    
                                </div>
                                <div class="column">
                                    <img src="images/p6.jpg" style={{ width: "100%" }} />
                                    <img src="images/p.png" style={{ width: "100%" }} />
                                    {/* <img src="images/p14.png" style={{ width: "100%" }} /> */}
                                </div>
                                <div class="column">
                                    <img src="images/p17.png" style={{ width: "100%" }} />
                                    <img src="images/p3.png" style={{ width: "100%" }} />
                                </div>
                                <div class="column">
                                    <img src="images/p12.png" style={{ width: "100%" }} />
                                    <img src="images/p15.png" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        )
    }
}
