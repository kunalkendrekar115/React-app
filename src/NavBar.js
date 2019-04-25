import './nav.css';

import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSideBarOpen: false
        }
    }

    Menu = (classNames) => {
        return (
            <ul className={classNames}>
                <li>
                    <NavLink
                        onClick={() => this.setState({ isSideBarOpen: false })}
                        exact to="/" className="normal" activeClassName="active">
                        <div className="icon-text"> <i class="material-icons icon-menu">home</i>Home</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => this.setState({ isSideBarOpen: false })}
                        className="normal" activeClassName="active" to="/product">
                        <div className="icon-text"> <i class="material-icons icon-menu">person</i>Product</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/history" className="normal" activeClassName="active">
                        <div className="icon-text"> <i class="material-icons icon-menu">history</i>History</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => this.setState({ isSideBarOpen: false })}
                        className="normal" activeClassName="active" to="/settings">
                        <div className="icon-text"> <i class="material-icons icon-menu">settings</i>Settings</div>
                    </NavLink>
                </li>
            </ul>

        )
    }
    render() {
        return (

            <div style={{ width: '100%'}}>
                <div className="nav">

                    <div className="menu-icon">
                        <i
                            onClick={() => { this.setState((prev) => { return { isSideBarOpen: !prev.isSideBarOpen } }) }}
                            class="material-icons">
                            menu</i>
                    </div>
                    <div class="title">Sample App</div>

                    {this.Menu('horizontal-menu')}
                </div>

                {this.SideBar()}

                {this.state.isSideBarOpen &&
                    <div className="backdrop" onClick={() => { this.setState((prev) => { return { isSideBarOpen: !prev.isSideBarOpen } }) }}></div>}
            </div>

        );
    }



    SideBar = () => {


        return (
            <div className={'side-menu'}>
                <div className={"side-bar " + (this.state.isSideBarOpen ? 'open' : '')}>
                    {this.Menu('vertical-menu')}
                </div>
            </div >
        )
    }
}


export default NavBar;