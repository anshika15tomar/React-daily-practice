import React, { useState } from 'react';

import './App.css'; 


function ProjectForm({ addProject }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [link, setLink] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newProject = {
        title,
        description,
        image,
        link
      };
  
      addProject(newProject);
  
      // Clear form after submission
      setTitle('');
      setDescription('');
      setImage('');
      setLink('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Project Link</label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
    );
  }
  export default ProjectForm;
