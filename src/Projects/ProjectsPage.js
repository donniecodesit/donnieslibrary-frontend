import React, { useState, useEffect } from "react";
import { listObjectsFromAPI } from "../utils/api";
import ListProjects from "./ListProjects";
import "./ProjectsPage.css";

export default function Projets() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadProjects() {
      setError([]);
      setLoaded(false);
      listObjectsFromAPI(abortController.signal, "projects")
        .then((res) => {
          setProjects(res.sort((projA, projB) => projB['index-priority'] - projA['index-priority']));
          setLoaded(true);
        })
        .catch((err) => {
          setProjects([]);
          setLoaded(true);
          setError([err.message]);
        });
    }

    loadProjects();
    return () => abortController.abort();
  }, []);

  return (
    <div
      className="main"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className="title">Donnie's Project Library</h1>
      {loaded ? (
        <>
          {error[0] && <div className="error">{error}</div>}
          <ListProjects projects={projects} />
        </>
      ) : (
        <>
          <h2>Loading Project Library...</h2>
          <img src="https://retchhh.files.wordpress.com/2015/03/loading1.gif" alt="Loading" style={{ width: "30%" }} />
        </>
      )}
    </div>
  );
}
