import {axiosService} from "./axiosService";
import {AxiosResponse} from "axios";

import {IPost} from "../components/models/IPost";

let postsService = {
    getAllPosts: (): Promise<AxiosResponse<IPost[]>> =>{
        return axiosService.get("/posts")
    }
}

export {
    postsService
}