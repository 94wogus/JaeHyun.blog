import React from 'react';
import { useDispatch } from "react-redux";
import {withRouter} from "react-router-dom"
import {Card, CardActionArea, CardContent} from '@material-ui/core';

import { setCurDoc } from '@store/action'

const PostCard = (props) => {
    const dispatch = useDispatch()
    const { post, history } = props;

    const readPost = (e) => {
        dispatch(setCurDoc({
            cur_doc: post,
            cur_doc_id: e.currentTarget.id,
            cur_doc_idx: e.currentTarget.getAttribute("idx")
        }))
        history.push(`/post/doc/${e.currentTarget.id}`)
    }

    return (
        <Card className="PostCard" id={post.PostId} idx={post.idx} onClick={readPost}>
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
    );
};

export default withRouter(PostCard);
