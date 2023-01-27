import React from "react";

function ListProjects({ projects }) {
  return projects.map((project) => {
    const [year, month, day] = project.date.split("-");
    const date = new Date(year, month, day);
    const projectDate = `${date.toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}`;

    return (
      <div className="projectRow" key={project.id}>
        <div className="projRowLeft col-md-4 col-lg-4">
          <img
            src={`./project_images/${project.unique}.png`}
            alt={`${project.title}`}
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </div>
        <div className="projRowRight col-md-8 col-lg-8">
          <h1>{project.title}</h1>
          <h5 style={{ marginTop: "15px" }}>{project.description}</h5>
          <h5>Created on: {projectDate}</h5>
          <div className="projectLinks">
            <a href={project.repo} target="_blank" rel="noreferrer">
              [GitHub Repo]
            </a>
            {project.url !== "none" && (
              <a href={project.url} target="_blank" rel="noreferrer">
                [Live Website]
              </a>
            )}
          </div>
        </div>
      </div>
    );
  });
}

export default ListProjects;
