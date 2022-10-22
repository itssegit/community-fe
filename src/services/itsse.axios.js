/**
 * axios http connection common module
 */

import axios from 'axios';

const AxiosModule = () => {
    /**
     * post method
     * 1) url
     * 2) send object
     */
    const sendPost = (url, data) => {
        //
        const config = {"Content-Type": 'application/json'};
        console.log('data', data);
        axios.post(url, data, config).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        }).then((result) => {
            console.log(result);
        });
    };

    const module = {
        sendPost
    };

    return module;
};

export default AxiosModule;