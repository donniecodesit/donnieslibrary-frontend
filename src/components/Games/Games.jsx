import React from "react";
import { useEffect, useState } from "react";
import { listObjectsFromAPI } from "../../utils/api";

// Components
import ListGames from "./ListGames";

// Styles
import "./games.css";

function Games() {
  const [games, setGames] = useState([]);
  const [gamesError, setGamesError] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadGames() {
      setGamesError([]);
      setLoaded(false);
      listObjectsFromAPI(abortController.signal, "games")
        .then((result) => {
          setGames(result.sort((gameA, gameB) => gameB.rating - gameA.rating));
          setLoaded(true);
        })
        .catch((error) => {
          setGames([]);
          setLoaded(true);
          setGamesError([error.message]);
        });
    }
    loadGames();
    return () => abortController.abort();
  }, []);

  return (
    <div className="games-container">
      {loaded ? (
        <>
          {gamesError[0] && <div className="error">{gamesError}</div>}
          <ListGames games={games} />
        </>
      ) : (
        <>
          <h2>Fetching...</h2>
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

export default Games;
