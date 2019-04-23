import React, { Component } from 'react';
import './nav.css';
class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0, list: [{
                name: 'Home',
                icon: 'home'
            }, {
                name: 'Profile',
                icon: 'person'
            },
            {
                name: 'History',
                icon: 'history'
            }, {
                name: 'Settings',
                icon: 'settings'
            }], isSideBarOpen: false
        }
    }
    render() {
        return (

            <div style={{ width: '100%' }}>
                <div className="nav">

                    <div className="menu-icon">
                        <i
                            onClick={() => { this.setState((prev) => { return { isSideBarOpen: !prev.isSideBarOpen } }) }}
                            class="material-icons">
                            menu</i>
                    </div>
                    <div class="title">Sample App</div>

                    <HorizontalMenu
                        list={this.state.list}
                        activeTab={this.state.activeTab}
                        onClick={(index) => this.setState({ activeTab: index })}
                    ></HorizontalMenu>
                </div>

                <SideBar
                    list={this.state.list}
                    isOpen={this.state.isSideBarOpen}
                    activeTab={this.state.activeTab}
                    onClick={(index) => this.setState({ activeTab: index })}
                ></SideBar>

                {this.state.isSideBarOpen &&
                    <div className="backdrop" onClick={() => { this.setState((prev) => { return { isSideBarOpen: !prev.isSideBarOpen } }) }}></div>}
            </div>

        );
    }

}

const SideBar = (props) => {


    return (
        <div className={'side-menu'}>
            <div className={"side-bar " + (props.isOpen ? 'open' : '')}>
                <ul className="vertical-menu">
                    {
                        props.list.map((item, index) => {
                            return (<li key={index} onClick={() => props.onClick(index)}>
                                <a className={props.activeTab === index ? 'active' : ''} href="#item">                          
                                <div className="icon-text"> <i class="material-icons icon-menu">{item.icon}</i>{item.name}</div>
                                </a></li>)
                        })
                    }

                </ul>
            </div>
        </div >
    )

}
const HorizontalMenu = (props) => {

    return (
        <ul className="horizontal-menu">
            {
                props.list.map((item, index) => {
                    return (<li key={index} onClick={() => props.onClick(index)}>
                        <a className={props.activeTab === index ? 'active' : ''} href="#item">
                            <div className="icon-text"> <i class="material-icons icon-menu">{item.icon}</i>{item.name}</div>
                        </a>
                    </li>)
                })
            }

        </ul>

    )
}

export default NavBar;