import {IPost} from "../models/IPost";
import {axiosService} from "./axiosService";

export const postsService = {
    getAllPosts: async (): Promise<IPost[]> =>{
        const response = await axiosService.get('/posts')
        return response.data
    },
    getPostById: async (id: string): Promise<IPost> => {
        const response = await axiosService.get('/posts'+id);
        return response.data;
    }


}