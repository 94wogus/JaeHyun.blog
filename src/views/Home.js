import React from 'react';
import {withRouter} from "react-router-dom"

import Container from "@components/common/Container"
import Profile from "@components/Home/Profile"
import PostList from "@components/Home/PostList"

const Home = (props) => {
    return (
        <Container>
            <div id="home" className="main">
                <Profile />
                <PostList />
            </div>
        </Container>
    )
}
export default withRouter(Home);
