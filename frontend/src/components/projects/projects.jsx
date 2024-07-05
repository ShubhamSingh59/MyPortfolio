import React, { useRef } from 'react';
import './projects.css';
import image from '../../assets/logo.png';

const projectsData = [
    {
        title: 'Project 1',
        description: 'Description for project 1',
        image: image,
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'Description for project 2',
        image: image,
        link: '#'
    },
    {
        title: 'Project 3',
        description: 'Description for project 3',
        image: image,
        link: '#'
    },
    {
        title: 'Project 4',
        description: 'Description for project 4',
        image: image,
        link: '#'
    }, {
        title: 'Project 1',
        description: 'Description for project 1',
        image: image,
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'Description for project 2',
        image: image,
        link: '#'
    }
];

function Projects() {
    return (
        <>
            <center id='project-head'><h2>Projects</h2></center>
            <section id="projects">
                {projectsData.map((project, index) => (
                    <div className="card" key={index}>
                        <img src={project.image} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <h5 className="card-title"><center>{project.title}</center></h5>
                            <p className="card-text">{project.description}</p>
                            {/*<a href={project.link} className="btn btn-primary">Read About it</a>*/}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Projects;
