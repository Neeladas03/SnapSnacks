import React from "react";

const Blogs = ({ location }) => {
  const newPost = location.state?.newPost;

  return (
    <div>
      <h1 style={{ fontFamily: "century gothic", fontSize: "40px", fontWeight: "bold" }}>Blogs</h1>
      {newPost && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", maxWidth: "600px", margin: "0 auto" }}>
          {newPost.image && (
            <img
              src={URL.createObjectURL(newPost.image)}
              alt="Blog Image"
              style={{ maxWidth: "100%" }}
            />
          )}
          <div style={{ textAlign: "left" }}>
            <h2>{newPost.title}</h2>
            <p>{newPost.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
