import axios from 'axios'
import Constant from "./constant"
import initialState from "./state"

export default function rootReducer(state=initialState, action){
    switch(action.type){
        //  ============== 0. Home ==============  //
        // case Constant.LOG_IN:
        //     if (action.payload.token !== undefined){
        //         var token_exp = moment().unix() + 3600
        //         window.localStorage.setItem('token', action.payload.token)
        //         window.localStorage.setItem('exp', token_exp)
        //         axios.defaults.headers.common['Authorization'] = `Token ${action.payload.token}`;
        //         return Object.assign({}, state, {
        //             token: action.payload.token
        //         })
        //     } else{
        //         window.localStorage.removeItem('token')
        //         window.localStorage.removeItem('exp')
        //         return state
        //     }
        default:
            return state;
    }
}
