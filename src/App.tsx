import React, {FC, useState} from 'react';
import './App.css';
import {UsersComponent} from "./components/users/UsersComponent";
import {IPost} from "./models/IPostModel";
import {getPostsByUserId} from "./services/postService";
import {PostsComponent} from "./components/posts/PostsComponent";



const App: FC = ()=> {
    const [posts, setPosts] = useState<IPost[]>([])

    const postsByUser = (userId: number)=>{
        getPostsByUserId(userId).then(({data})=>setPosts(data.posts))
    }
  return (
      <div className={'app'}>

          <div className={'users'}>
              <UsersComponent postsByUser={postsByUser}/>
          </div>

          <div className={'posts'}>
              <PostsComponent posts={posts}/>
          </div>




      </div>
  )
};

export default App;
