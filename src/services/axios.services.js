import axios from "axios";

import baseURL, {apiToken} from "./urls.configs";

const axiosServices = axios.create({
    baseURL,
    headers: {
        Authorization: apiToken
    }
});

export {axiosServices};