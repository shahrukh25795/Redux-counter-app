import axios from 'axios';

export const getApi = (url) => {
    return axios({
        method: 'GET',
        headers:  null,
        url: url,
        responseType: 'json'
    }).then(res => res).catch(err => err.response);
}