import {axiosService} from "./axiosService";

import {IPost} from "../models/IPost";


export const postsService = {
    getAllPosts: async (): Promise<IPost[]> =>{
        const response = await axiosService.get('/posts')
        return response.data
    }
}