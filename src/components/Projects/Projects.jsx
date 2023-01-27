import React from "react";
import { useEffect, useState } from "react";
import { listObjectsFromAPI } from "../../utils/api";

// Components
import ListProjects from "./ListProjects";

// Styles
import "./projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectsErr, setProjectsErr] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadProjects() {
      setProjectsErr([]);
      setLoaded(false);
      listObjectsFromAPI(abortController.signal, "projects")
        .then((result) => {
          setProjects(
            result.sort(
              (projA, projB) =>
                projB["index-priority"] - projA["index-priority"]
            )
          );
          setLoaded(true);
        })
        .catch((error) => {
          setProjects([]);
          setLoaded(true);
          setProjectsErr([error.message]);
        });
    }
    loadProjects();
    return () => abortController.abort();
  }, []);

  return (
    <div className="projects-container">
      {loaded ? (
        <>
          {projectsErr[0] && <div className="error">{projectsErr}</div>}
          <ListProjects projects={projects} />
        </>
      ) : (
        <>
          <h2>Getting Projects List...</h2>
          <img
            src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/circular_progress_indicator_square_large.gif"
            alt="Loading GIF"
            style={{ width: "10%", marginBottom: "720px" }}
          />
        </>
      )}
    </div>
  );
}

export default Projects;
