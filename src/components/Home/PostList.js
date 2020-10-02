import React from 'react';
import {withRouter} from "react-router-dom"
import { connect } from 'react-redux';

import {
    Card, CardActionArea, CardContent, Button
} from '@material-ui/core';

const PostList = (props) => {
    const { post_list, history } = props;
    console.log(post_list)

    return (
        <div className="mainPosts">
            <div className="titleWrap">
                <h1>Recent Posts</h1>
            </div>
            <div className="PostWarp">
            {post_list.slice(0, 10).map((post)=>(
                <Card className="PostCard" key={post.PostId}>
                    <CardActionArea className="PostContent">
                        <div className="PostImage">
                            <img 
                                src={`https://drive.google.com/uc?export=view&id=${post.ImageId}`}
                                alt={post.Title}
                                title={post.Title}
                            />
                        </div>
                        <CardContent className="PostInfo">
                            <span className="title">{post.Title}</span>
                            <span className="description">{post.Description}</span>
                            <span className="time">마지막 업데이트 시각: {post.LastUpdated}</span>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            </div>
        </div>
    )
}
export default connect(state => ({
    post_list: state.post_list
}))(withRouter(PostList));
