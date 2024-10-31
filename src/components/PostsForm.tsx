import React, {FC, useState} from 'react';
import { useForm} from "react-hook-form";
import {IFormPost} from "../models/IFormPost";
import {joiResolver} from "@hookform/resolvers/joi";

import {postValidator} from "../validators/postValidator";
import {postService} from "../services/postService";
import {IPost} from "../models/IPost";

const PostsForm: FC = () => {
  const {handleSubmit,
      register,
      reset,
      formState:{
          errors,
          isValid
  }} = useForm<IFormPost>({mode: "all", resolver: joiResolver(postValidator)})

    const [post, setPost] = useState<IPost>()

    const save = (dataFromForm: IFormPost) =>{
        postService.createPost(dataFromForm).then(value => setPost(value.data))

        reset()
        }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <label>
                    <input type='number' placeholder='userId' {...register('userId')}/>
                    {errors.userId && <span>{errors.userId.message}</span>}
                </label>
            <br/>

                <label>
                    <input type='text' placeholder='title' {...register('title')}/>
                    {errors.title && <span>{errors.title.message}</span>}
                </label>
                <br/>

                <label>
                    <input type='text' placeholder='body' {...register('body')}/>
                    {errors.body && <span>{errors.body.message}</span>}

                </label>
                <br/>

                <button disabled={!isValid}>save</button>

                {post && <div>
                    <h3>New post</h3>
                    <h4>{post.title}</h4>
                    <p>post ID: {post.id}</p>
                    <p>{post.body}</p>
                </div>}

            </form>


        </div>
    );
};

export {PostsForm};