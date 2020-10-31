import Axios from 'axios';

const nytAxios = Axios.create({
    baseURL: "https://api.nytimes.com/svc/search/v2/",
    params: {
        'api-key': '2tV7umd8TGMbXtLAhW7dlpSA8gkt2YpJ',
    }
})

export default nytAxios;