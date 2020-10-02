import Constant from "./constant"
import initialState from "./state"

export default function rootReducer(state=initialState, action){
    switch(action.type){
        //  ============== 0. Home ==============  //
        case Constant.TOGGLE_DRAWER:
            return Object.assign({}, state, {
                menuSwitch: action.payload
            })
        case Constant.GET_POST_LIST:
            return Object.assign({}, state, {
                post_list: action.payload
            })
        default:
            return state;
    }
}
