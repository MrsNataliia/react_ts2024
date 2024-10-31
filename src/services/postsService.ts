import {AxiosResponse} from "axios";

import {IPost} from "../model/IPost";
import {axiosService} from "./axiosService";

export const postsService ={
    getAllPosts: async (): Promise<AxiosResponse<IPost[]>> =>{
        return await axiosService.get('/posts')
    }
}