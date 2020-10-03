import Constant from "./constant"

export function toggleDrawer(bol) {
    return {
        type: Constant.TOGGLE_DRAWER,
        payload: bol,
    };
}

export function getPostList(packed_post_list){
    var sorted_post_list = packed_post_list.reverse()
    sorted_post_list = sorted_post_list.map((post, idx)=>({
        ...post,
        idx: idx
    }))
    return {
        type: Constant.GET_POST_LIST,
        sorted_post_list: sorted_post_list,
        post_list: packed_post_list
    };
}

export function setPostPageNum(cur_page_num){
    return {
        type: Constant.CHANGE_POST_PAGE_NUM,
        cur_page_num: cur_page_num
    };
}

export function setCurDoc(payload){
    return {
        type: Constant.SET_CUR_DOC_ID,
        cur_doc: payload.cur_doc,
        cur_doc_id: payload.cur_doc_id,
        cur_doc_idx: payload.cur_doc_idx
    };
}