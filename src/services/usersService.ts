import {axiosService} from "./axiosService";

import {IUsersResponse} from "../models/IUsersResponse";
import {IUser} from "../models/IUser";


export const usersService = {

    users: {
        getAll: async (page: number): Promise <IUsersResponse & {users: IUser[]}> =>{
            const skip = (page-1) * 30;

            const {data} = await axiosService.get<IUsersResponse & {users: IUser[]}>('/users', {
                params: {
                    skip: skip
                }
            });
            return data
        }

    }
}