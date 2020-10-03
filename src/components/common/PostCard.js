import React from 'react';
import {Card, CardActionArea, CardContent} from '@material-ui/core';

const PostCard = (props) => {
    const { post } = props;

    return (
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
    );
};

export default PostCard;
