import axios from "axios"

const ApiClient = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 10000,
});

export { ApiClient } 