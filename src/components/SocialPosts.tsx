import './SocialPosts.css';
import { useState } from 'react';
import Post from '../models/Post';
import PostForm from './PostForm';
import PostInList from './PostInList';

function SocialPosts() {

    const [showForm, setShowForm] = useState(false);

    const [ post, setNewPost ] = useState<Post[]>([
        { title: "Grand Circus", thought: "Grand Circus is cool"},
        { title: "React", thought: "React is crazy"},
        { title: "Lab", thought: "This lab is hard!"}
       
    ]);

    function handleFormSubmit(post: Post): void {
        console.log(post);
        setShowForm(false);
    }

    return (
        <div className="SocialPosts">
            <h1 className="HeadingTitle">Thinker Feed </h1>
            <h2>Social media for people with big brains.</h2>
            <div className="ThoughtButton">
                <button className="NewThought" onClick={() => setShowForm(true)}>New Thought</button>
            </div>
            <section className="PostListContainer">
                {post.map((post, i) =>
                <PostInList key={i} post={post} />
                )}
            </section>
            {showForm && <PostForm onFormSubmit={handleFormSubmit}/>}
        </div>
    )
}

export default SocialPosts;