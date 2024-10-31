import React, {FC} from 'react';
import './App.css';

import {Posts} from "./components/Posts";
import {PostsForm} from "./components/PostsForm";


const App: FC = ()=> {
  return (
      <div>

          <PostsForm/>

          <hr/>

         <Posts/>


      </div>
  )
};

export default App;
