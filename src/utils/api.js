import axios from "axios"
import moment from "moment"

// dev
export const BASE_URL = "http://localhost:8000";
// prod


axios.defaults.withCredentials = true;

export const METHOD = {
    GET: { num: 0, type: "get" },
    DELETE: { num: 1, type: "delete" },
    POST: { num: 2, type: "post" },
    PUT: { num: 3, type: "put" },
    POST_FILES: { num: 4, type: "post" },
    LOGIN: { num: 5, type: "post" }
};

export const request = (method, url, payload={}) => {
    let axiosConfig = { method: method.type, url: url };
    if (method.num <= 1) {
        axiosConfig = { ...axiosConfig};
    } else if (method.num <= 3) {
        axiosConfig = { ...axiosConfig, data: payload };
    } else if (method.num <= 4) {
        axiosConfig = {
            ...axiosConfig,
            headers: { "Content-Type": "multipart/form-data" },
            data: payload
        }
    } else {
        axiosConfig = {
            ...axiosConfig,
            data: payload,
        }
    }
    return axios(axiosConfig)
    .then((resp) => {
        return resp.data
    })
    .catch((err) => console.log(err));
};

export const checkAuthHeader = () =>{
    var token = window.localStorage["token"];
    var exp = window.localStorage["exp"] || 0;
    var now = moment().unix()

    if (exp > now && token !== undefined){
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        return false
    }
    else{
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("exp")
        return true
    }
}

export const packUrl = (url, param) => {
    Object.keys(param).forEach(function(key, index){
        url = url + (index === 0 ? "?" : "&") + key + "=" + param[key]
    })
    return url
}
