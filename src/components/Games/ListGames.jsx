import React from "react";
import { FaStar, FaStarHalf, FaHeart } from "react-icons/fa";

// Images
import img_loading from "../../images/loadingimg.png";

function ListGames({ games }) {
  const hexValues = ["5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

  return (
    <div className="gamesList">
      {games.length > 0 &&
        games.map((game) => {
          const stars = Math.floor(game.rating);
          const halfStar = String(game.rating).endsWith(".5");
          const topGame = stars === 5 && halfStar;

          let hexCode = "";
          for (let i = 0; i < 6; i++) {
            hexCode += hexValues[Math.floor(Math.random() * hexValues.length)];
          }

          return (
            <div
              className="gameCard"
              key={game.game_id}
              style={{
                border: `4px solid #${hexCode}`,
                backgroundImage: `url("${img_loading})`,
                backgroundSize: "cover",
              }}
            >
              <img
                className="gameImage"
                src={game.game_image}
                alt={game.game_title}
              />
              <div className="gameInfo">
                <h4 className="gameTitle">
                  <a
                    href={`https://www.google.com/search?q=${game.game_title
                      .replace("+", "%2B")
                      .split(" ")
                      .join("+")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {game.game_title}
                  </a>
                </h4>
                <div className="gameExtra">
                  <div className="gameRelease">{game.game_release}</div>
                  <div className="gamePlatform">{game.platform}</div>
                  <div className="gameMode">
                    {game.multiplayer ? "Multiplayer" : "Singleplayer"}
                  </div>
                  {topGame ? (
                    <div className="gameRating">
                      {Array(stars)
                        .fill()
                        .map((_, i) => (
                          <FaHeart color="hsl(var(--acceColor))" key={i} />
                        ))}
                    </div>
                  ) : (
                    <div className="gameRating">
                      {Array(stars)
                        .fill()
                        .map((_, i) => (
                          <FaStar color="gold" key={i} />
                        ))}
                      {halfStar && <FaStarHalf color="gold" />}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ListGames;
