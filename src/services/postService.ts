import {AxiosResponse} from "axios";
import {axiosService} from "./axiosService";

import {IPost} from "../models/IPost";
import {IFormPost} from "../models/IFormPost";


const postService = {

getAll: async (): Promise<AxiosResponse<IPost[]>> => {
    return (await axiosService.get('/posts'))
},

createPost:  async (dataFromForm: IFormPost) => {
    return  await (axiosService.post('/posts', dataFromForm))
}

}

export {
    postService
}