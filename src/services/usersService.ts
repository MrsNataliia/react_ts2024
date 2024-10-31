import {AxiosResponse} from "axios";

import {axiosService} from "./axiosService";
import {IUser} from "../model/IUser";

export const usersService = {
    getAllUsers: async (): Promise<AxiosResponse<IUser[]>> =>{
        return await axiosService.get('/users')
    }
}