import React from 'react';
import { useDispatch, connect } from 'react-redux';
import {withRouter} from "react-router-dom"
import { toggleDrawer } from '@store/action'

import {Button} from '@material-ui/core';
import {Menu, MenuOpen} from '@material-ui/icons';

import bear from "@image/bear.png"

const Header = (props) => {
    const dispatch = useDispatch();
    const { menuSwitch, history } = props;

    const goHome = () => {
        if (history.location.pathname !== "/home" && history.location.pathname !== "/" ){
            history.push('/home')
        }
    }

    const openDrawer = () => {
        dispatch(toggleDrawer(true))
    };

    return (
        <div id="header">
            <div className="logoWarp" onClick={goHome}>
                <img src={bear} alt="bearimag"></img>
                <div className="title">
                    <span>JaeHyun</span><span style={{fontSize: 30}}>'</span><span>s Blog</span>
                </div>
            </div>
            <Button onClick={openDrawer}>
                {menuSwitch
                ?<MenuOpen />
                :<Menu/>
                }
            </Button>
        </div>
    );
};

export default connect(state => ({
    menuSwitch: state.menuSwitch
}))(withRouter(Header));
