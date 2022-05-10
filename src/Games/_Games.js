import React, { useState, useEffect } from "react";
import { listGames } from "../utils/api";
import GamesList from "./GamesList";
import NewGame from "./NewGame";
import { useNavigate } from "react-router-dom";
import './_Games.css'

export default function Games({ admin }) {
  const [games, setGames] = useState([]);
  const [error, setError] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();
    async function loadGames() {
        setError([]);
      setLoaded(false);
      listGames(abortController.signal)
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
    loaded && (
      <div className="main">
        <h1 className="title">Donnie's Library</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <a className="title" href='/' style={{fontSize: '32px', padding: 0}} onClick={(event) => {
            event.preventDefault();
            navigate('/portfolio')
          }}>Portfolio</a>
        </div>
        {error[0] && <div className="error">{error}</div>}
        {admin && <NewGame />}
        <GamesList games={games} />
      </div>
    )
  );
}
