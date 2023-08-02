import React from "react";
import { useEffect, useState } from "react";
import { listObjectsFromAPI } from "../../utils/api";

// Components
import ListGames from "./ListGames";

// Styles
import "./games.css";

export default function Games() {
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
          {gamesError[0] && (
            <div className="error">
              Unable to fetch data. The server may be temporarily unavailable.
            </div>
          )}
          {!gamesError[0] && (
            <div className="gamesNote">
              <h4>What's this section?</h4>
              <p>
                This page is for the gamers out there! Games can be a great way
                to start a conversation (and code discussion too), so I'd like
                to share some of my top favorites here!
              </p>
            </div>
          )}
          <ListGames games={games} />
        </>
      ) : (
        <>
          <h2 className="fetching">Getting Games from the DB!</h2>
          <img
            src="https://i.stack.imgur.com/hzk6C.gif"
            alt="Loading GIF"
            style={{ width: "10%" }}
          />
        </>
      )}
    </div>
  );
}
