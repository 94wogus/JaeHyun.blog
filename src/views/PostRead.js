import React, {useEffect} from 'react';
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom"
import { METHOD, request, packDocURL} from "@api";

import {Divider} from '@material-ui/core';
import Container from "@components/common/Container"

import { setCurDoc } from '@store/action'

const PostRead = (props) => {
    const dispatch = useDispatch()
    const {match, post_list, cur_doc, cur_doc_id, cur_doc_idx} = props

    useEffect(() => {
        var url = packDocURL(match.params.id)
        request(METHOD.GET, url)
        .then(result => {
            var doc = document.getElementById("doc")
            var dummyHTML = document.createElement("html")
            dummyHTML.innerHTML = result
            
            var styles = dummyHTML.querySelectorAll("head > style")
            styles.forEach((currentValue, currentIndex, listObj)=> {
                doc.appendChild(currentValue)
            })

            var bodyChlidren = dummyHTML.querySelector("body").children
            Array.prototype.forEach.call(bodyChlidren, (elem, index) => {
                doc.appendChild(elem)
            });
        })
    }, [dispatch]);

    useEffect(() => {
        if (cur_doc_id !== match.params.id){
            var cur_doc = post_list.filter(post => post.PostId === match.params.id)[0]
            if (cur_doc){
                dispatch(setCurDoc({
                    cur_doc: cur_doc,
                    cur_doc_id: cur_doc.PostId,
                    cur_doc_idx: cur_doc.idx
                }))
            }
        }
    }, [post_list])

    return (
        <Container>
            <div id="docWrap" className="main">
                <h1 className="docTitle">{cur_doc.Title}</h1>
                <h2 className="docsubTitle">{cur_doc.Description}</h2>
                <span className="docTime">{cur_doc.LastUpdated}</span>
                <Divider className="docDivider"/>
                <div id="doc">
                </div>
            </div>
        </Container>
    );
};

export default connect(state => ({
    post_list: state.post_list,
    cur_doc: state.cur_doc,
    cur_doc_id: state.cur_doc_id,
    cur_doc_idx: state.cur_doc_idx
}))(withRouter(PostRead));
