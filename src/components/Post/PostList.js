import React from 'react';
import {withRouter} from "react-router-dom"
import { connect, useDispatch} from 'react-redux';

import Pagination from '@material-ui/lab/Pagination';
import PostCard from "@components/common/PostCard"

import { setPostPageNum } from '@store/action'

const PostList = (props) => {
    const dispatch = useDispatch();
    const { post_page, cur_page_post_list, cur_page_num, history } = props;

    const pageChange = (event, value) => {
        dispatch(setPostPageNum(value))
    };


    return (
        <div className="mainPosts">
            <h1 className="titleWrap">JaeHyun's Posts</h1>
            <div className="PostWarp">
            {cur_page_post_list.map((post)=>(
                <PostCard post={post} />
            ))}
            </div>
            <Pagination 
                count={post_page} 
                className="postPagination" 
                onChange={pageChange} 
                page={cur_page_num}
            />
        </div>
    )
}
export default connect(state => ({
    post_page: state.post_page,
    cur_page_num: state.cur_page_num,
    cur_page_post_list: state.cur_page_post_list
    
}))(withRouter(PostList));
