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
      <h1 className="welcome-box" style={{width: "75%"}}>Donnie's Project Library</h1>
      {loaded ? (
        <>
          {error[0] && <div className="error">{error}</div>}
          <ListProjects projects={projects} />
        </>
      ) : (
        <>
          <h1 className="portfolio-h1">Loading Project Library...</h1>
          <img src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/circular_progress_indicator_square_large.gif" alt="Loading GIF" style={{ width: "10%", marginBottom: "720px" }} />
        </>
      )}
    </div>
  );
}
