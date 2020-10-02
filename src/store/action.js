import Constant from "./constant"

export function toggleDrawer(bol) {
    return {
        type: Constant.TOGGLE_DRAWER,
        payload: bol,
    };
}

export function getPostList(payload){
    return {
        type: Constant.GET_POST_LIST,
        payload: payload,
    };
}