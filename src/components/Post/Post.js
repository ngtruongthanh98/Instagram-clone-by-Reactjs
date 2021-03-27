import React, { PureComponent } from "react";
import "../Post/Post.css";
import Avatar from "@material-ui/core/Avatar";

export class Post extends PureComponent {
    render() {
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
}

export default Post;
