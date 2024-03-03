
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/data";
import "./details.css";

export const DetailsPages = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    let blogPost = blog.find((post) => post.id === parseInt(id));
    if (blogPost) {
      setBlogs(blogPost);
    }
  }, [id]);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <h1>{blogs.heading}</h1>
              <p>{blogs.desc}</p>
              <p>{blogs.content}</p>
            </div>
            <div className='likeSection'>
                <button onClick={handleLike} style={{color:"red",fontFamily:"century gothic",fontWeight:"bold",padding:"7px"}}>Likes</button>
                <span>{likes}</span>
              </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
