import React from "react";
import { useEffect, useState } from "react";
import { listObjectsFromAPI } from "../../utils/api";

// Components
import ListProjects from "./ListProjects";

// Styles
import "./projects.css";

export default function Projects() {
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
          {projectsErr[0] && (
            <div className="error">
              Unable to fetch data. The server may be temporarily unavailable.
            </div>
          )}
          <ListProjects projects={projects} />
        </>
      ) : (
        <>
          <h2 className="fetching">Getting Projects from the DB!</h2>
          <img
            src="https://i.stack.imgur.com/hzk6C.gif"
            alt="Loading GIF"
            style={{ width: "15%" }}
          />
        </>
      )}
    </div>
  );
}
