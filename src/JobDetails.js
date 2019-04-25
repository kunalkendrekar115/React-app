import './JobDtl.css';

import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = { isFav: false }
    }
    render() {
        return (

            <div style={{padding:20}}>

                <div className="rowview">

                    <div className="star_icon">
                        <i class="material-icons">
                            star_border</i>
                    </div>

                    <span className="banner">
                    </span>
                    <div className="content">


                        <label className="jobTitle">Front end Developer React.JS/HTML</label>
                        <label className="company">ClearTrip</label>

                        <span className="exp">
                            <i style={{ fontSize: 16, marginRight: 6, lineHeight: 'inherit', overflow: 'hidden' }} class="material-icons">work</i>
                            <label style={{ position: 'relative', bottom: 1 }}>2-6 Years</label>
                        </span>

                        <span className="loc">
                            <i style={{ fontSize: 16, marginRight: 6, lineHeight: 'inherit', overflow: 'hidden' }} class="material-icons">location_on</i>
                            <label style={{ position: 'relative', bottom: 1 }}>2-6 Years</label>
                        </span>

                    </div>

                    <div>

                        <span className="skills">Html, Java, JavaScript, react.js</span>

                        <div className="fav_icon" onClick={() => this.setState((state) => ({ isFav: !state.isFav }))}>
                            <i class="material-icons">
                                {this.state.isFav ? 'star' : 'star_border'}</i>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default App;
