import axios from "axios";

let axiosService = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
})

export {
    axiosService
}

