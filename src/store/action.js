import Constant from "./constant"

export function toggleDrawer(bol) {
    return {
        type: Constant.TOGGLE_DRAWER,
        payload: bol,
    };
}

export function getPostList(packed_post_list){
    var sorted_post_list = packed_post_list.reverse()
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