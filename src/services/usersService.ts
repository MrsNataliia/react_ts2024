
import {IUser} from "../models/IUser";
import {axiosService} from "./axiosService";

export const usersService ={
    getAllUsers:  async ():Promise<IUser[]> =>{
        const response = await axiosService.get('/users')
        return response.data
    }
 }