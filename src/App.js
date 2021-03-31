import { Button, Input, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post/Post";
import { auth, db } from "./firebase";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import InstagramEmbed from "react-instagram-embed";

function getModalStyle() {
    const top = 50;
    const left = 37;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transfrom: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function App() {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user has logged in ...
                console.log(authUser);
                setUser(authUser);
            } else {
                // user has logged out ...
                setUser(null);
            }
        });

        return () => {
            // perform some cleanup actions
            unsubcribe();
        };
    }, [user, username]);

    useEffect(() => {
        // this is where the code run
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                // everytime a new post is added, this code firebase updated
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        post: doc.data(),
                    }))
                );
            });
    }, []);

    const signUp = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                return authUser.user.updateProfile({
                    displayName: username,
                });
            })
            .catch((error) => alert(error.message));

        setOpen(false);
    };

    const signIn = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password).catch((error) =>
            alert(error.message)
        );

        setOpenSignIn(false);
    };

    return (
        <div className="App">
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-model-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="app__signup">
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
                        <Button type="submit" onClick={signUp}>
                            Sign Up
                        </Button>
                    </form>
                </div>
            </Modal>

            <Modal
                open={openSignIn}
                onClose={() => setOpenSignIn(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-model-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="app__signup">
                        <center>
                            <img
                                className="app__headerImage"
                                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                                alt=""
                            />
                        </center>

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
                        <Button type="submit" onClick={signIn}>
                            Sign In
                        </Button>
                    </form>
                </div>
            </Modal>

            <div className="app__header">
                <img
                    className="app__headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                />

                {user ? (
                    <Button onClick={() => auth.signOut()}>Logout</Button>
                ) : (
                    <div className="app__loginContainer">
                        <Button onClick={() => setOpenSignIn(true)}>
                            Sign In
                        </Button>
                        <Button onClick={() => setOpen(true)}>Sign Up</Button>
                    </div>
                )}
            </div>

            <div className="app__posts">
                <div className="app__postsLeft">
                    {posts.map(({ id, post }) => (
                        <Post
                            key={id}
                            postId={id}
                            user={user}
                            username={post.username}
                            caption={post.caption}
                            imageURL={post.imageURL}
                        />
                    ))}{" "}
                </div>
                <div className="app_postsRight">
                    <InstagramEmbed
                        url="https://instagr.am/p/Zw9o4/"
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName="div"
                        protocol=""
                        injectScript
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                    />
                </div>
            </div>

            {user?.displayName ? (
                <ImageUpload username={user.displayName} />
            ) : (
                <center>
                    <h3>Sorry you need to login to upload</h3>
                </center>
            )}
        </div>
    );
}

export default App;
