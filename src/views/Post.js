import React from 'react';
import {withRouter} from "react-router-dom"

import Container from "@components/common/Container"
import Series from "@components/Post/Series"
import PostList from "@components/Post/PostList"

const Post = (props) => {
    return (
        <Container>
            <div id="post" className="main">
                <div className="seriesContainer">
                    <h1 style={{marginBottom: 5, fontSize:35}}>Post Series</h1>
                    <Series />
                    <PostList />
                </div>
            </div>
        </Container>
    )
}
export default withRouter(Post);
