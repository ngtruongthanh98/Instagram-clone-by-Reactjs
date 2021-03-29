import React, {useState, useEffect} from "react";
import "./App.css";
import Post from "./components/Post/Post"
import { db } from "./firebase";

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// this is where the code run
		db.collection('posts').onSnapshot(snapshot => {
			// everytime a new post is added, this code firebase updated
			setPosts(snapshot.docs.map(doc => doc.data()));
		})
	}, []);

    return (
        <div className="App">			
			<div className="app__header">
				<img
					className="app__headerImage"
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt=""
				/>
			</div>
			
            <h1>Let's build the Instagram clone</h1>

			{
				posts.map(post => (
					<Post username={post.username} caption={post.caption} imageURL={post.imageURL}/>
				))
			}
        </div>
    );
}

export default App;
