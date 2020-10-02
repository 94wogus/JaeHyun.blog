import React from 'react';
import {withRouter} from "react-router-dom"
import Container from "@components/common/Container"

import Profile from "@components/Home/Profile"

const Home = (props) => {
    return (
        <Container>
            <div id="home" className="main">
                <Profile /> 
            </div>
        </Container>
    )
}

export default withRouter(Home);
