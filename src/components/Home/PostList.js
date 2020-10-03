import React from 'react';
import {withRouter} from "react-router-dom"
import { connect } from 'react-redux';

import {Button} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import PostCard from "@components/common/PostCard"

const PostList = (props) => {
    const { post_list, history } = props;

    const goPost = () =>{
        history.push("/post")
    }

    return (
        <div className="mainPosts">
            <div className="titleWrap">
                <h1>Recent Posts</h1>
                <Button className="more" onClick={goPost}>
                    <ArrowForwardIosIcon />
                    <span>More</span>
                </Button>
            </div>
            <div className="PostWarp">
            {post_list.slice(0, 10).map((post)=>(
                <PostCard post={post} />
            ))}
            </div>
        </div>
    )
}
export default connect(state => ({
    post_list: state.post_list
}))(withRouter(PostList));
