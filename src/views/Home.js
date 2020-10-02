import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom"
import { useDispatch } from 'react-redux';

import Container from "@components/common/Container"
import { SPREATSHEET_URL, METHOD, request} from "@api";
import { getPostList } from '@store/action'

import Profile from "@components/Home/Profile"
import PostList from "@components/Home/PostList"

const Home = (props) => {
    const dispatch = useDispatch();
    const { history } = props;

    useEffect(() => {
        request(METHOD.GET, SPREATSHEET_URL)
        .then(result => {
            var raw = result.values.reverse()
            var index = raw.pop()

            var payload = raw.map((item)=>(
                Object.assign({},
                    ...index.map((key, idx)=>({[key]: item[idx]}))
                )
            ))
            dispatch(getPostList(payload))
        })
        
    }, []);

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
