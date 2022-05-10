import React, { useState, useEffect } from 'react';
import { listGames } from '../utils/api';
import GamesList from './GamesList';
import NewGame from './NewGame';

export default function Games({admin}) {
    const [games, setGames] = useState([]);
    const [gamesError, setGamesError] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        async function loadGames() {
            setGamesError([]);
            setLoaded(false);
            listGames(abortController.signal)
                .then((res) => {
                    setGames(res.sort((gameA, gameB) => gameB.rating - gameA.rating))
                    setLoaded(true);
                })
                .catch((err) => {
                    setGames([]);
                    setLoaded(true);
                    setGamesError([err.message]);
                })
        }

        loadGames();
        return () => abortController.abort();
    }, [admin])

    return (
        loaded && (
            <div className="main">
                {gamesError[0] && <div className="error">{gamesError}</div>}
                {admin && <NewGame />}
                <GamesList games={games} />
            </div>
        )
    )
}