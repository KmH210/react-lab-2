import './PostForm.css';
import { FormEvent, useState } from 'react';
import Post from '../models/Post';

interface Props {
    onFormSubmit: ( post: Post) => void
}

function PostForm({onFormSubmit}: Props) {

    // const [ display, setDisplay ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ thought, setThought ] = useState("");

    function handleSubmit(e: FormEvent) {
        const post = {
            title: title,
            thought: thought
        }
        e.preventDefault();
        onFormSubmit(post);
    }

    return (
        <div className="PostForm">
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Title<br></br>
                    <input className="title" type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
                    </label>
                </p>
                <p>
                    <label>Thought<br></br>
                    <textarea className="thought" value={thought} onChange={e => setThought(e.target.value)}></textarea>
                    </label>
                </p>
                <p>
                    <button type="submit">Add Post</button>
                </p>
            </form>
        </div>
    )
}

export default PostForm;