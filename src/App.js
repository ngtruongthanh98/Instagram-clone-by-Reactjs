import React, {useState} from "react";
import "./App.css";
import Post from "./components/Post/Post"

function App() {
	const [posts, setPosts] = useState([
		{
			username: "drazennguyen",
			caption: "Hello Instagram",
			imageURL: "https://i.imgur.com/C9sPKrS.png"
		},

		{
			username: "drazennguyen", 
			caption: "Viva Espana", 
			imageURL: "https://i.imgur.com/rzjFZAv.png"
		},

		{
			username: "drazennguyen", 
			caption: "Natural and fresh", 
			imageURL: "https://i.imgur.com/526tuSE.png"
		}

	]);

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
