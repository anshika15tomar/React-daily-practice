import React ,{useState} from 'react';
import * as Yup from 'yup';

import './App.css';
import ProjectForm from './projectForm'; 


function App() {

  const [projects, setProjects] = useState([
    {
      title: "State as snapshot",
      description: "Weather forecast app using OpenWeather API.",
      image: "/weather.png",
      link: "https://github.com/anshika15tomar"
    },
    {
      title: "Todo List",
      description: "Simple todo list app with local storage support.",
      image: "/todo.png",
      link: "https://github.com/anshika15tomar"
    }
  ]);

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };
  
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo"><img src="https://tse4.mm.bing.net/th?id=OIP.4nBvLMYKlGTI5JfKj643XgHaHa&pid=Api&P=0&h=180" alt="Logo" className="logo-img"/></div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    
      <section id="home" className="section">
        <h1>Hello, I'm Anshika Tomar</h1>
        <p>Frontend Developer | React Enthusiast</p>
      </section>
      
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>I am a passionate frontend developer who loves building beautiful websites using Html , css , js and React js .</p>
      </section>

      <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card">
            {/* <img
              src={project.image}
              alt={project.title}
              className="project-image"
            /> */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-button"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
    
    <section id="add-project" className="form-wrapper">
        <h2>Add New Project</h2>
        <ProjectForm addProject={addProject} />
      </section>
      


    

      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Email: anshikatomar5588@example.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/anshikatomar5588/</p>
      </section>

      <footer className="footer">
        © 2025 Anshika tomar . All rights reserved.
      </footer>
    </div>
  );
}

export default App;
