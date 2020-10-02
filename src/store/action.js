import { BASE_URL, METHOD, request, packUrl } from "@/utils/api";
import Constant from "./constant"

export function toggleDrawer(bol) {
    return {
        type: Constant.TOGGLE_DRAWER,
        payload: bol,
    };
}

export function getPostList(){
    const apiKey = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY
    console.log(apiKey)
    return {
        type: Constant.GET_POST_LIST,
        payload: [],
    };
}