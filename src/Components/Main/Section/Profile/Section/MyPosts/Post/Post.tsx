import React from 'react';
import post from "./Post.module.css"


type PostType = {
    id:string
    message: string
    like: number
}

export const Post = (props: PostType) => {
    return (
        <div className={post.item}>
            <img src="https://cdn.pixabay.com/photo/2023/05/17/08/55/tree-7999477__340.jpg" alt="post logo"/>
            {props.message}
            <span>like {props.like}</span>
        </div>
    );
};

export default Post;