import {axiosService} from "./axiosService";

import {AxiosResponse} from "axios";
import {IUserResponse} from "../models/IUserResponseModel";

const getAllUsers = (): Promise<AxiosResponse<IUserResponse>> =>{
    return axiosService.get('/users');
}

export {
    getAllUsers
}