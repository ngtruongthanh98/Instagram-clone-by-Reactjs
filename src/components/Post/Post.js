import React, { useState, useEffect } from "react";
import "../Post/Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "../../firebase";
import firebase from "firebase";

function Post({ postId, user, username, caption, imageURL }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
        let unsubscribe;

        if (postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                });
        }
        return () => {
            unsubscribe();
        };
    }, [postId]);

    const postComment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setComment("");
    };

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
            <img src={imageURL} className="post__image" alt="" />

            {/* username + caption */}
            <h4 className="post__text">
                <strong>{username} </strong>
                {caption}
            </h4>

            {comments.map((comment) => (
                <div className="post__comments">
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                </div>
            ))}

            {user && (
                <form className="post__commentBox">
                    <input
                        className="post__input"
                        type="text"
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                        className="post__button"
                        disabled={!comment}
                        type="submit"
                        onClick={postComment}
                    >
                        Post
                    </button>
                </form>
            )}
        </div>
    );
}

export default Post;
