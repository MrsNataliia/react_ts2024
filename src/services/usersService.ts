import {axiosService} from "./axiosService";

import {IUser} from "../models/IUser";


export const usersService ={
    getAllUsers:  async ():Promise<IUser[]> =>{
        const response = await axiosService.get('/users')
        return response.data
    }
 }