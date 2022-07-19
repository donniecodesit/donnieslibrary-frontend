import React, { useState } from "react";
import "./BotInfoPage.css";
import botcommands from "./botcommands.json";

export default function BotInfoPage() {
  const dropdownStatus = {
    element1: false,
    element2: false,
    element3: false,
    element4: false,
    element5: false,
    element6: false,
    element7: false,
  };

  const titles = ['General', 'Fun', 'Profile', 'Economy', 'Media', 'Scenario', 'Admin'];

  const [drops, setDrops] = useState(dropdownStatus);
  function handleDropdown(id) {
    setDrops({ ...drops, [`element${id}`]: !drops[`element${id}`] });
  }

  return (
    <div className="page">
      <h1 className="welcome-box" style={{width: "75%", marginTop: "15px", marginBottom: "0px"}}>Donnie's Discord Bot</h1>
      <div className="page-content slideFromBottom">
        <div className="col">
          <div className="botinfo">
            <img
              src="https://camo.githubusercontent.com/aaa7a7e7809ccc85dae59d2ab159a0db418cbab7c1e7feaa101d50805f55286e/68747470733a2f2f692e696d6775722e636f6d2f326143647541362e706e67"
              alt="prototon"
            />
            <div className="info-box" id="info">
              <h1>Information:</h1>
              <p>
                PrototonBot is the successor to ShepherdBot Classic, a Discord
                Bot written by Donovan Laws. The previous bot had been written
                in JavaScript and was later rewritten and improved in 2020 in C#
                with Discord.Net. The old bot has been since discontinued and is
                now being completely revised and renewed as of 2022, using
                everything I've learned about programming so far.
              </p>
            </div>
            <div className="info-box" id="usage">
              <h1>Usage:</h1>
              <p>
                Invite the bot to your server, and your admins can use the bot
                anywhere, and enable the bot in channels for users using the
                enablechannel command!
              </p>
            </div>
            <div className="info-box" id="features">
              <h1>Features:</h1>
              <ul>
                <li>
                  An economy system with the bot using "Protobucks", as well as
                  experience and other items or stats you can gain.
                </li>
                <li>
                  An inventory system in the works, where items you've gathered
                  are contained, along with durability stats.
                </li>
                <li>
                  An entire profiling system, letting you view details about
                  your profile, along with all of your stats and additional
                  details.
                </li>
                <li>
                  A media system in the works, sending images or GIFs related to
                  commands, from storage.
                </li>
                <li>
                  Some scenario generation, featured in multiple commands using
                  random output.
                </li>
                <li>
                  Administrative commands to control where the bot can be used,
                  server flow, and the prefix!
                </li>
              </ul>
            </div>
            <div className="info-box" id="commands">
              <div id="cmd0">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h1>Commands Information</h1>
                  <p>These are the categories of commands you can use with PrototonBot!</p>
                </div>
              </div>

              {titles.map((title, index) => {
                const page = index + 1;

                return (
                  <div id={`cmd${page}`} key={`cmd${page}`}>
                    <div>
                      <h1 className="hover" onClick={() => handleDropdown(page)}>
                        {title} Commands (Page {page})
                      </h1>
                      <p className="portfolio-p hover" style={{ margin: "0 10px" }} onClick={() => handleDropdown(page)}>
                        {drops[`element${page}`] ? "⮟" : "⮜"}
                      </p>
                    </div>
                    <div className="my-table-wrapper" style={{display: drops[`element${page}`] ? "block" : "none"}}>
                      <table className="my-table">
                        <thead>
                          <tr>
                            <th scope="col">Command</th>
                            <th scope="col">Aliases</th>
                            <th scope="col">Info</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.keys(botcommands[index]).map((command) => {
                            const { aliases, tip } = botcommands[index][command];
                            const aliLeng = aliases.length;

                            return (
                              <tr key={command}>
                                <td>{command}</td>
                                <td>{aliLeng > 0 ? aliLeng > 1 ? aliases.join(", ") : aliases[0] : ""}</td>
                                <td>{tip}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}