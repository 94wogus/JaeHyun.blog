import Constant from "./constant"
import initialState from "./state"
import {groupBy} from "@/utils/func.js"

const PER_PAGE = 5

export default function rootReducer(state=initialState, action){
    switch(action.type){
        //  ============== 0. Home ==============  //
        case Constant.TOGGLE_DRAWER:
            return Object.assign({}, state, {
                menuSwitch: action.payload
            })
        case Constant.GET_POST_LIST:
            var grouped_post_list =  groupBy(action.post_list, "Category")
            var quotient = parseInt(action.post_list.length / PER_PAGE);
            if (action.post_list.length % PER_PAGE > 0){
                quotient = quotient + 1
            }
            return Object.assign({}, state, {
                post_list: action.sorted_post_list,
                grouped_post_list: grouped_post_list,
                post_page: quotient,
                cur_page_post_list: action.sorted_post_list.slice(0, 5)
            })
        case Constant.CHANGE_POST_PAGE_NUM:
            var begin = (action.cur_page_num - 1) * PER_PAGE
            var end = action.cur_page_num * PER_PAGE
            return Object.assign({}, state, {
                cur_page_num: action.cur_page_num,
                cur_page_post_list: state.post_list.slice(begin, end)
            })
        case Constant.SET_CUR_DOC_ID:
            return Object.assign({}, state, {
                cur_doc: action.cur_doc,
                cur_doc_id: action.cur_doc_id,
                cur_doc_idx: action.cur_doc_idx
            })
        default:
            return state;
    }
}
