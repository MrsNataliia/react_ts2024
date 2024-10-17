import {AxiosResponse} from "axios";
import {axiosService} from "./axiosService";

import {IComment} from "../components/models/IComment";



const commentsService = {
    getAllComments: (): Promise<AxiosResponse<IComment[]>> =>{
        return axiosService.get("/comments")

    }
}

export {
    commentsService
}