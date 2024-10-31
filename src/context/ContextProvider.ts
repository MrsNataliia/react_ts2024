import {createContext, useContext} from "react";

import {IUser} from "../model/IUser";
import {IPost} from "../model/IPost";
import {IComment} from "../model/IComment";

type StoreType ={
    usersStore:{
        allUsers: IUser[]
    },
    postsStore:{
        allPosts: IPost[]
    }
    commentsStore:{
        allComments: IComment[]
    }
}

export const defaultValue: StoreType = {
    usersStore:{
        allUsers: []
    },
    postsStore:{
        allPosts: []
    },
    commentsStore:{
        allComments: []
    }

}

export const MyContext = createContext<StoreType>(defaultValue)

export const useContextProvider = (): StoreType => useContext(MyContext)