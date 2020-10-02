import React from 'react';
import { useDispatch, connect } from 'react-redux';
import {withRouter} from "react-router-dom"
import { toggleDrawer } from '@store/action'

import {
    Drawer, Avatar, List, ListItem, ListItemIcon, ListItemText,
    Divider
} from '@material-ui/core';

import routes from "@/router"
import bear from "@image/bear.png"

const LeftMenu = (props) => {
    const dispatch = useDispatch();
    const { menuSwitch, history } = props;

    const closeDrawer = () => {
        dispatch(toggleDrawer(false))
    };

    const goPage = (event) => {
        dispatch(toggleDrawer(false))
        history.push(event.currentTarget.getAttribute("path"))
    };

    return (
        <Drawer id="drawer" anchor="left" open={menuSwitch} onClose={closeDrawer}>
            <List className="menuList">
                <ListItem className="avatarWarp">
                    <Avatar alt="JaeHyun.Back" src={bear} className="avatar"/>
                    <span>JaeHyun</span><span style={{fontSize: 24}}>'</span><span>s Blog</span>
                </ListItem>
                <Divider style={{marginTop: 20}}></Divider>
                {routes.filter(r => r.leftmenu).map((menu) => (
                    <ListItem 
                        key={menu.name}
                        path={menu.path}
                        button={true}
                        className="menu"
                        onClick={goPage}
                    >
                        <ListItemIcon >{menu.icon}</ListItemIcon>
                        <ListItemText 
                            disableTypography={true}
                            primary={menu.name.toUpperCase()}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default connect(state => ({
    menuSwitch: state.menuSwitch
}))(withRouter(LeftMenu));
