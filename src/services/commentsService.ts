import {axiosService} from "./axiosService";

import {IComment} from "../models/IComment";


export const commentsService = {
    getAllComments: async (): Promise<IComment[]> =>{
        const response = await axiosService.get('/comments')
        return response.data
    }
}