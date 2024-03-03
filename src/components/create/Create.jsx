import React from "react";
import "./create.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useHistory } from "react-router-dom"; 
import { useState } from "react";

export const Create = ({ location }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({ title: "", content: "", image: null });
  

  const handleChange = (event) => {
    const { name, value, files } = event.target;
  
    if (name === "image" && files && files.length) {
      // Check if files exist before accessing files[0]
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      alert("Please fill in both title and content fields.");
      return;
    }

    history.push('/blogs', { newPost: formData });
  };

  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>
          <img
  src={formData.image ? URL.createObjectURL(formData.image) : ''}
  alt='image'
  className='image-preview'
/>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='inputfile flexCenter'>
            <label htmlFor='fileInput' className='fileLabel'>
                <IoIosAddCircleOutline className='icon' />
                Choose Image
              </label>
              <input
                type='file'
                accept='image/*'
                id='fileInput'
                name='image'
                className='fileInput'
                onChange={handleChange}
              />
            </div>
            <label htmlFor='title'>Title</label>
<input
  type='text'
  id='title'
  name='title'
  placeholder='Title'
  value={formData.title}
  onChange={handleChange}
/>

<label htmlFor='content'>Content</label>
<textarea
  id='content'
  name='content'
  cols='30'
  rows='10'
  value={formData.content}
  onChange={handleChange}
></textarea>

            <button type='submit' className='button' onClick={handleSubmit}>
              Create Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
