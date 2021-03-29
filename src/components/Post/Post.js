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

                <h3>{username}</h3>
            </div>

            {/* image */}
            <img
                src={imageURL}
                className="post__image"
                alt=""
            />

            {/* username + caption */}
            <h4 className="post__text">
                <strong>{username} </strong>{caption}
            </h4>
        </div>
    );
}

export default Post;
