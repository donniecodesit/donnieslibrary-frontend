import React from 'react'

function ListProjects({ projects }) {
    return (
        projects.map((project) => {
            const [year, month, day] = project.date.split("-");
            const date = new Date(year, month, day);
            const projectDate = `${date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}`;

            return (
                <div className="project-box slideFromBottom" key={project.id}>
                    <div className="project-left col-md-4 col-lg-4">
                        <img 
                            src={`./project_images/${project.id}.png`} 
                            alt={`${project.title}`} 
                            style={{
                                width: "100%",
                                borderRadius: "20px"
                            }}
                        />
                    </div>
                    <div className="project-right col-md-8 col-lg-8">
                        <h1 className="portfolio-h1">{project.title}</h1>
                        <h3 className="portfolio-h3" style={{marginTop: "15px"}}>{project.description}</h3>
                        <h3 className="portfolio-h3">Created on: {projectDate}</h3>
                        <div className="project-links">
                            <a href={project.repo} target="_blank" rel="noreferrer">GitHub Repo</a>
                            {(project.url !== "none") && <a href={project.url} target="_blank" rel="noreferrer">Live Website</a>}
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default ListProjects