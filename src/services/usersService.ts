import {AxiosResponse} from "axios";

import {axiosService} from "./axiosService";
import {IUser} from "../components/models/IUser";

const usersService = {
    getAllUsers: (): Promise<AxiosResponse<IUser[]>> =>{
        return axiosService.get("/users")

    }
}

export {
    usersService
}
