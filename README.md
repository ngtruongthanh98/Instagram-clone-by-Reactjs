# Instagram-clone-by-Reactjs

Frontend: ReactJs / Backend: Firebase

To install node_modules:
`npm install`

To start the project:
`npm start`

---

Create new app: `npx create-react-app instagram-clone-by-reactjs`

## Setup Firebase

Access `https://firebase.google.com/`

![Firebase website](https://i.imgur.com/vBsYmS8.png)

Click `Go to console`

![Firebase website](https://i.imgur.com/yAzAaOb.png)

Click `Add new project` to create your new project

Set your project's name

![Firebase project name](https://i.imgur.com/HNiTyzz.png)

Click `Continue`

![Firebase setup](https://i.imgur.com/3DbsALs.png)

![Firebase setup](https://i.imgur.com/C0qnsEM.png)

![Firebase setup](https://i.imgur.com/EUW0fG7.png)

![Firebase setup](https://i.imgur.com/9wH0x7o.png)

![Firebase setup](https://i.imgur.com/V0JnKLk.png)

Create new Firebase project done

![Firebase setup](https://i.imgur.com/hXyBD9C.png)

---

Create app in Firebase, choose Web:

![Firebase App](https://i.imgur.com/44XSLof.png)

Set the app's name and click setup Firebase Hosting:

![Firebase App](https://i.imgur.com/nWWoVBR.png)

![Firebase App](https://i.imgur.com/iEwsaUr.png)

![Firebase App](https://i.imgur.com/C53KEG8.png)

![Firebase App](https://i.imgur.com/oRX7RT6.png)

`sudo npm install -g firebase-tools`

![Firebase App](https://i.imgur.com/YLd5wRu.png)

Create Firebase app done:

![Firebase App](https://i.imgur.com/kiDThlF.png)

---

Clean up the project, delete App.test.js, logo.svg, setupTests.js

Change App.js into this:

![App.js](https://i.imgur.com/u53qpBO.png)

![Sentence](https://i.imgur.com/9zMi74Z.png)

With App.css

```
* {
  margin: 0;
}
```

Change the website's elements margin: 0

![margin: 0](https://i.imgur.com/dDqpuPG.png)

I design follow the Instagram.com

![Instagram](https://i.imgur.com/yRZ4teV.png)

The web will have app header, posts

You can get style Instagram word via copy image address of the official Instagram, or using this link: `https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png`

![copy image address](https://i.imgur.com/e16tauc.png)

---

App header:

In App.js:

```
        <div className="App">
			<div className="app__header">
				<img
					className="app__headerImage"
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt=""
				/>
			</div>

            <h1>Let's build the Instagram clone</h1>

        </div>
```

In App.css:

```
* {
  margin: 0;
}

.app {
  background-color: #fafafa;
  height: 100vh;
}

.app__header {
  background-color: white;
  padding: 20px;
  object-fit: contain;
}
```

![Web app](https://i.imgur.com/swM7zWT.png)

Add border-bottom to app\_\_header:

```
.app__header {
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  object-fit: contain;
}
```

![border-bottom](https://i.imgur.com/ZjyThXD.png)

---

Post

In src folder, create folder components. Inside the components folder, create folder Post. In the Post folder, we create Post.js and Post.css

Here is a post:

![An Instagram post](https://i.imgur.com/dcQEp4T.png)

As you can see, every post has a header (avatar + username), an image of post, and a big caption (username + caption)

In Post.js

```
import React, { PureComponent } from 'react'

export class Post extends PureComponent {
    render() {
        return (
            <div>
                <h3>Instagram Post</h3>
                {/* header --> avatar + username */}

                {/* image */}

                {/* username + caption */}
            </div>
        )
    }
}

export default Post
```

Remember to import component Post to App.js

```
import Post from "./components/Post/Post"
```

Call the Post component:

```<Post/>

```

![Import Post component](https://i.imgur.com/ui7A8fq.png)

Try to sketch the layout:

In Post.js:

![Post.js](https://i.imgur.com/PfG2Sfm.png)

![Post.js](https://i.imgur.com/SM6QjuW.png)

Next, I want to scale the image, so I create a className="post\_\_image" in Post.css

For the <div> of Post component, I create className="post"

```
            <div className="post">
                {/* header --> avatar + username */}
                <h3>Username</h3>

                {/* image */}

                <img src="https://i.imgur.com/rzjFZAv.png" className="post__image" alt="Image"/>


                {/* username + caption */}
                <h4>Username: caption</h4>
            </div>
```

Remember to add this line at the beginning of Post.js: ```import "../Post/Post.css"```

In Post.css
```
.post__image {
    width: 100%;
    object-fit: contain;
}
```
The image will have a full width, noted that: `If we use object-fit: contain; the image keeps its aspect ratio, but is resized to fit within the given dimension:`

Now we edit Username + Caption, the Username should be bold, the remain part (caption) is normal.
```<h4 className="post__text"><strong>Username </strong>Here is a caption</h4>```

![Username and Caption](https://i.imgur.com/5Qie4oY.png)

```
.post__text {
    font-weight: normal;
}
```

For Avatar, We use Material UI. Go to this page: `https://material-ui.com/`
Install it: `npm install @material-ui/core`

Import Avatar for Material UI to the beginning of Post.js:
```import Avatar from "@material-ui/core/Avatar";```

With the post header:
```
                {/* header --> avatar + username */}
                <Avatar
                    className="post__avatar"
                    alt="drazennguyen"
                    src="https://i.imgur.com/OH8NKgs.png"
                />

                <h3>Username</h3>
```

The avatar is added: 

![Avatar added](https://i.imgur.com/sN5soYa.png)

Now, we need to create className="post__header" to cover both avatar and username
```
                {/* header --> avatar + username */}
                <div className="post__header">
                    <Avatar
                        className="post__avatar"
                        alt="drazennguyen"
                        src="https://i.imgur.com/OH8NKgs.png"
                    />

                    <h3>Username</h3>
                </div>
```

With Post.css:
```
.post__header {
    display: flex;
}
```

For `display: flex` display items in a row.

![display flex](https://i.imgur.com/KTYSdeI.png)

```
.post__header {
    display: flex;
    align-items: center;
}
```

To move text to the middle

![align-item center](https://i.imgur.com/mST2Zlw.png)

```
.post__avatar {
    margin-right: 10px;
}
```

Between Avatar and Username have a distance:

![margin-right](https://i.imgur.com/1MzIl25.png)

```
.post__header {
    display: flex;
    align-items: center;
    padding: 20px;
}
```

I make a padding for post__header, it will not touch the post__image

![padding](https://i.imgur.com/FxBwTmX.png)

I change other avatar picture to see it clear:

![New avatar](https://i.imgur.com/b882j7a.png)

We will make padding for post__text by 20px

![Before padding](https://i.imgur.com/cWdRgUb.png)

```
.post__text {
    font-weight: normal;
    padding: 20px;
}
```

![After padding](https://i.imgur.com/1O474Ij.png)

The post must be fixed in a constant size.

```
.post {
    max-width: 500px;
}
```

![Fixed width post](https://i.imgur.com/aVMmk6o.png)

Change the background-color:

```
.post {
    background-color:white;
    max-width: 500px;
}
```

Make border for .post
```
.post {
    background-color:white;
    max-width: 500px;
    border: 1px solid lightgray;
}
```

![Add border](https://i.imgur.com/oRieYie.png)

Draw border for post__image:
```
.post__image {
    width: 100%;
    object-fit: contain;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
}
```
![post__image border](https://i.imgur.com/ljrH1Oy.png)

Now we try to create more posts:

In App.js:
```
            <h1>Let's build the Instagram clone</h1>

			<Post/>
			<Post/>
			<Post/>
```

In our web app:

![Posts](https://i.imgur.com/HLP0rNT.png)

Let's see the real Instagram:

![Posts In Real Instagram](https://i.imgur.com/qIuyVMI.png)

We make a margin-bottom

```
.post {
    background-color:white;
    max-width: 500px;
    border: 1px solid lightgray;
    margin-bottom: 45px;
}
```
After that, we have a result:

![After margin](https://i.imgur.com/EP4lLXK.png)

________________________________________________

Transfer data to a post component:

I change class component to functional component in Post.js. Because functional component can get data (username, caption, imageURL) from Props.

```
import React from "react";
import "../Post/Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({username, caption, imageURL}) {
    return (
        <div className="post">
            {/* header --> avatar + username */}
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="drazennguyen"
                    src="https://i.imgur.com/DYaxbkt.png"
                />

                <h3>Username</h3>
            </div>

            {/* image */}
            <img
                src="https://i.imgur.com/rzjFZAv.png"
                className="post__image"
                alt="Image"
            />

            {/* username + caption */}
            <h4 className="post__text">
                <strong>Username </strong>Here is a caption
            </h4>
        </div>
    );
}

export default Post;

```

In App.js, I give props to a post:
```
    <Post username="drazennguyen" caption="Hello Instagram" imageURL="https://i.imgur.com/C9sPKrS.png"/>

```

In Post.js:

```
function Post({username, caption, imageURL}) {
    return (
        <div className="post">
            {/* header --> avatar + username */}
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="drazennguyen"
                    src="https://i.imgur.com/DYaxbkt.png"
                />

                <h3>{username}</h3>
            </div>

            {/* image */}
            <img
                src={imageURL}
                className="post__image"
                alt="Image"
            />

            {/* username + caption */}
            <h4 className="post__text">
                <strong>{username} </strong>{caption}
            </h4>
        </div>
    );
}
```

![props data](https://i.imgur.com/XDC1hVZ.png)

Create more posts:

```
			<Post username="drazennguyen" caption="Hello Instagram" imageURL="https://i.imgur.com/C9sPKrS.png"/>
			<Post username="drazennguyen" caption="Viva Espana" imageURL="https://i.imgur.com/rzjFZAv.png"/>
			<Post username="drazennguyen" caption="Natural and fresh" imageURL="https://i.imgur.com/526tuSE.png"/>
```
_________________________________________________

In App.js, use useState

```import React, {useState} from "react";```

```	const [posts, setPosts] = useState([]);```

Now, create a data array including data of posts:

```
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
```

We call those data to ```<Post/>```

```
			{
				posts.map(post => (
					<Post username={post.username} caption={post.caption} imageURL={post.imageURL}/>
				))
			}
```

______________________________________

Create database in Firebase

![Firebase](https://i.imgur.com/oDYhP3q.png)

![Create database](https://i.imgur.com/6QSLd8Y.png)

I choose Test mode

![Test mode](https://i.imgur.com/pJ0NxqK.png)

Because I am in Vietnam, I choose server South Asia

![Server](https://i.imgur.com/hSFx4f6.png)

![Firebase](https://i.imgur.com/YztNsIA.png)

![Firebase](https://i.imgur.com/2TH9pX3.png)

Press `Start collection`

Create a collection name `posts`:

![collection](https://i.imgur.com/d5y1mc3.png)

Give these form data, click `Audo-ID`, then `Save`

![Form](https://i.imgur.com/qRuL6lA.png)

posts: many posts
Each document is a post
In a post has caption, imageURL, username...

![After add data](https://i.imgur.com/qdiNK88.png)\

![Connect Firecbase](https://i.imgur.com/uIjHu0u.png)

Click the setting icon -> Project settings

Scroll down to `Your apps`

![Firebase config](https://i.imgur.com/d01GIWI.png)

Select `Config`:

![Firebase config](https://i.imgur.com/fPU7vyh.png)

In `src`, create a file `firebase.js`

`npm i firebase`

In `firebase.js`, write ```import firebase from "firebase";``` to the top.

```
const firebaseApp = firebase.initializeApp({

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
```

![Firebase connection](https://i.imgur.com/R9vYdND.png)

In 
```
const firebaseApp = firebase.initializeApp({

});
```

Copy config from Firebase into it

__________________________________________
Go back to App.js

We will use `useEffect`. "useEffect": run a piece of code based on a specific condition.

Add useEffect to import

```import React, {useState, useEffect} from "react";```

useEffect(() => {
    // this is where the code run
}, [ // condition ]);

I want the code run everytime a comment happens

In App.js, ```import { db } from "./firebase";```

```
	useEffect(() => {
		// this is where the code run
		db.collection('posts').onSnapshot(snapshot => {
			// everytime a new post is added, this code firebase updated
			setPosts(snapshot.docs.map(doc => doc.data()));
		})
	}, []);
```

Change code into this:

```
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// this is where the code run
		db.collection('posts').onSnapshot(snapshot => {
			// everytime a new post is added, this code firebase updated
			setPosts(snapshot.docs.map(doc => doc.data()));
		})
	}, []);
```

Then project can load data from Firebase

Add doc.id:
```
	useEffect(() => {
		// this is where the code run
		db.collection('posts').onSnapshot(snapshot => {
			// everytime a new post is added, this code firebase updated
			setPosts(snapshot.docs.map(doc => ({
				id: doc.id,				
				post: doc.data()
			})));
		})
	}, []);
```

```
			{
				posts.map(({id, post}) => (
					<Post key={id} username={post.username} caption={post.caption} imageURL={post.imageURL}/>
				))
			}
```
______________________________________

Now we go to Authentication in Firebase

![Auth](https://i.imgur.com/lM8dmf5.png)

![Auth](https://i.imgur.com/KgWnGO0.png)

You have many choices to sign in your project:

![Sign-in](https://i.imgur.com/0ez4WiO.png)

Enable Email, and Save

![Email](https://i.imgur.com/tHahR7o.png)

![Email](https://i.imgur.com/WZWluR3.png)

I use Modal in MaterialUI: `https://material-ui.com/components/modal/#simple-modal`

In App.js: 

```
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
```

Before function App():
```
function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transfrom: `translate(-${top}%, -${left}%)`,
	}
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));
```

in App():
```
	const classes = useStyles();
	const [modalStyle] = useState(getModalStyle);

    const [posts, setPosts] = useState([]);
	const [open, setOpen] = useState(false);

```

```
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-model-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>I am a Modal</h2>
                </div>
            </Modal>
```

Create button for Sign-up, sign-in:

```
import { Button, Modal } from "@material-ui/core";

```

Create button for Sign-up:
```
			<Button onClick={() => setOpen(true)}>Sign up</Button>

```

![Button](https://i.imgur.com/TjVz0I2.png)

![Button](https://i.imgur.com/AOUiOX9.png)

Now we customize the button `SING UP`

```import { Button, Input, Modal } from "@material-ui/core";```

In App():

```
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
```

With ```<Modal>```:
```
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-model-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <form>
                        <center>
                            <img
                                className="app__headerImage"
                                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                                alt=""
                            />
                        </center>

                        <Input
                            placeholder="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            placeholder="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button onClick={signUp}>Sign Up</Button>
                    </form>
                </div>
            </Modal>

```

![Sign Up](https://i.imgur.com/iwSzhDp.png)

For ```<form>``` create ```<form className="app__signup">```

Change css in App.css

```
.app__signup {
  display: flex;
}
```

![display flex](https://i.imgur.com/jp4EEoI.png)

```
.app__signup {
  display: flex;
  flex-direction: column;
}
```

Add ```flex-direction: column;```

![flex direction](https://i.imgur.com/rEz5HFz.png)

```
    const signUp = (event) => {
        event.preventDefault();
    };
```
Noted: The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

In `<Modal>`: ```<Button type="submit" onClick={signUp}>Sign Up</Button>```

In `signUp`, after ```event.preventDefault();```

```
        auth
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => alert(error.message));
```

Check login - logout:
```    const [user, setUser] = useState(null);```

```
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                // user has logged in ...
                console.log(authUser);
                setUser(authUser);
            } else {
                // user has logged out ...
                setUser(null);
            }
        })
    }, []);
```

```
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                // user has logged in ...
                console.log(authUser);
                setUser(authUser);

                if(authUser.displayName) {
                    // dont update username
                } else {
                    // if we just created someone 
                    return authUser.updateProfile({
                        displayName: username
                    });
                }
            } else {
                // user has logged out ...
                setUser(null);
            }
        })
    }, []);
```

```
            } else {
                // user has logged out ...
                setUser(null);
            }
        })
    }, [user, username]);
```

Now we change this:
```
    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                // user has logged in ...
                console.log(authUser);
                setUser(authUser);
                
            } else {
                // user has logged out ...
                setUser(null);
            }
        })

        return () => {
            // perform some cleanup actions
            unsubcribe();
        }
    }, [user, username]);
```

and in `signUp()`:

```
    const signUp = (event) => {
        event.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                return authUser.user.updateProfile({
                    displayName: username
                })
            })
            .catch((error) => alert(error.message));
    };
```

LogOut:

```
            {user ? (
                <Button onClick={() => auth.signOut()}>Logout</Button>
            ) : (
                <Button onClick={() => setOpen(true)}>Sign Up</Button>
            )}
```

Let's sign up new user:

![sign up](https://i.imgur.com/LcIfCq4.png)

![sign up](https://i.imgur.com/M5N25YO.png)

After sign up, your account automatically login, so the signup button change to logout button

![logout](https://i.imgur.com/pxvQMo6.png)