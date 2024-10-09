import {axiosService} from "./axiosService";
import {AxiosResponse} from "axios";

import {IPostResponseModel} from "../models/IPostResponseModel";

const getPostsByUserId = (userId: number):Promise<AxiosResponse<IPostResponseModel>> =>{
    return axiosService.get('/posts/user/' +userId)
}

export {
    getPostsByUserId
}