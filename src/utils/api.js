
export const SPREATSHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SPREADSHEET_ID}/values/Post?key=${process.env.REACT_APP_API_KEY}`

export const METHOD = {
    GET: { num: 0, type: "GET" },
    DELETE: { num: 1, type: "DELETE" },
    POST: { num: 2, type: "POST" },
    PUT: { num: 3, type: "PUT" },
    POST_FILES: { num: 4, type: "POST" },
    LOGIN: { num: 5, type: "POST" }
};

export const request = (method, url, payload={}, json=false) => {
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
    .then((response) => {
        if (json){
            return response.json()
        } else{
            return response.text()
        }
    })
    .catch((error) => {console.error('Error:', error); return null})
};

export const packDocURL = (fid) => {
    return `https://docs.google.com/feeds/download/documents/export/Export?id=${fid}&exportFormat=html`
}
