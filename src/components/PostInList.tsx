import './PostInList.css';
import { useState } from 'react';
import Post from '../models/Post';

export interface Props {
    post: Post;
}

function PostInList({post}: Props) {

    const title = post.title;
    const thought = post.thought;

    return (
        <div className="PostInList">
            <h2 className="PostListTitle">{title}</h2>
            <p className="PostListThought">{thought}</p>
        </div>
    )
}

export default PostInList;