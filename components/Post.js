import React from "react";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div>
      <img src={post.photoUrl} />
      <p>{post.input}</p>
    </div>
  );
};

export default Post;
