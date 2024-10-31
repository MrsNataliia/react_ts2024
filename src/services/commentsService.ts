import {AxiosResponse} from "axios";

import {IComment} from "../model/IComment";
import {axiosService} from "./axiosService";

export const commentsService = {
    getAllComments: async (): Promise<AxiosResponse<IComment[]>> =>{
        return axiosService.get('/comments')
    }

}