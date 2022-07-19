import React, { useState, useEffect } from "react";
import { listObjectsFromAPI } from "../utils/api";
import GamesList from "./GamesList";
import NewGame from "./NewGame";
import "./_Games.css";

export default function Games({ admin }) {
  const [games, setGames] = useState([]);
  const [error, setError] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadGames() {
      setError([]);
      setLoaded(false);
      listObjectsFromAPI(abortController.signal, "games")
        .then((res) => {
          setGames(res.sort((gameA, gameB) => gameB.rating - gameA.rating));
          setLoaded(true);
        })
        .catch((err) => {
          setGames([]);
          setLoaded(true);
          setError([err.message]);
        });
    }

    loadGames();
    return () => abortController.abort();
  }, [admin]);

  return (
    <div className="main" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 className="welcome-box" style={{width: "75%", marginTop: "15px", marginBottom: "0px"}}>Donnie's Game Library</h1>
      {loaded ? (
        <>
          {error[0] && <div className="error">{error}</div>}
          {admin && <NewGame />}
          <GamesList games={games} />
        </>
      ) : (
        <>
          <h1 className="portfolio-h1">Loading Game Library...</h1>
          <img src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/circular_progress_indicator_square_large.gif" alt="Loading GIF" style={{ width: "10%", marginBottom: "720px" }} />
        </>
      )}
    </div>
  );
}