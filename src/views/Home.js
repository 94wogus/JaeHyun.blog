import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom"
import { useDispatch, connect } from 'react-redux';

import Container from "@components/common/Container"
import { getPostList } from '@store/action'

import Profile from "@components/Home/Profile"

const Home = (props) => {
    const dispatch = useDispatch();
    const { post_list, history } = props;

    useEffect(() => {
        dispatch(getPostList())
    }, []);

    return (
        <Container>
            <div id="home" className="main">
                <Profile />
            </div>
        </Container>
    )
}
export default connect(state => ({
    post_list: state.post_list
}))(withRouter(Home));
