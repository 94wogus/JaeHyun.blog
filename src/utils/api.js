
export const SPREATSHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SPREADSHEET_ID}/values/Post?key=${process.env.REACT_APP_API_KEY}`

export const METHOD = {
    GET: { num: 0, type: "GET" },
    DELETE: { num: 1, type: "DELETE" },
    POST: { num: 2, type: "POST" },
    PUT: { num: 3, type: "PUT" },
    POST_FILES: { num: 4, type: "POST" },
    LOGIN: { num: 5, type: "POST" }
};

export const request = (method, url, payload={}) => {
    let axiosConfig = {method: method.type};
    if (method.num <= 1) {
        axiosConfig = { ...axiosConfig};
    } else if (method.num <= 3) {
        axiosConfig = { ...axiosConfig, body: JSON.stringify(payload)};
    } else if (method.num <= 4) {
        axiosConfig = {...axiosConfig, headers: { "Content-Type": "multipart/form-data" }, body: payload}
    } else {
        axiosConfig = { ...axiosConfig, body: JSON.stringify(payload)};
    }
    return fetch(url, axiosConfig)
    .then((response) => {return response.json()})
    .catch((error) => {console.error('Error:', error); return null})
};

export const packUrl = (url, param) => {
    Object.keys(param).forEach(function(key, index){
        url = url + (index === 0 ? "?" : "&") + key + "=" + param[key]
    })
    return url
}
