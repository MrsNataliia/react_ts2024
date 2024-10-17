import axios from "axios";

let axiosService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
})

export {
    axiosService
}