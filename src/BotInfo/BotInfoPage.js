import React, { useState } from 'react'
import "./BotInfoPage.css";

export default function BotInfoPage() {
    const dropdownStatus = {
        element1: false,
        element2: false,
        element3: false,
        element4: false,
        element5: false,
        element6: false,
        element7: false
    }

    const [drops, setDrops] = useState(dropdownStatus);
    function handleDropdown(id) {
        setDrops({ ...drops, [`element${id}`]: !drops[`element${id}`]});
    }

    return (
        <div className="page">
            <div className="page-content">
                <div className="col">
                    <div className="botinfo">
                        <img 
                            src="https://camo.githubusercontent.com/aaa7a7e7809ccc85dae59d2ab159a0db418cbab7c1e7feaa101d50805f55286e/68747470733a2f2f692e696d6775722e636f6d2f326143647541362e706e67" 
                            alt="prototon"
                        />
                        <div className="info-box" id="info">
                            <h1>Information:</h1>
                            <p>PrototonBot is the successor to ShepherdBot Classic, a Discord Bot written by Donovan Laws. The previous bot had been written in JavaScript and was later rewritten and improved in 2020 in C# with Discord.Net. The old bot has been since discontinued and is now being completely revised and renewed as of 2022, using everything I've learned about programming so far.</p>
                        </div>
                        <div className="info-box" id="usage">
                            <h1>Usage:</h1>
                            <p>Invite the bot to your server, and your admins can use the bot anywhere, and enable the bot in channels for users using the enablechannel command!</p>
                        </div>
                        <div className="info-box" id="features">
                            <h1>Features:</h1>
                            <ul>
                                <li>An economy system with the bot using "Protobucks", as well as experience and other items or stats you can gain.</li>
                                <li>An inventory system in the works, where items you've gathered are contained, along with durability stats.</li>
                                <li>An entire profiling system, letting you view details about your profile, along with all of your stats and additional details.</li>
                                <li>A media system in the works, sending images or GIFs related to commands, from storage.</li>
                                <li>Some scenario generation, featured in multiple commands using random output.</li>
                                <li>Administrative commands to control where the bot can be used, server flow, and the prefix!</li>
                            </ul>
                        </div>
                        <div className="info-box" id="commands">
                            <div id="cmd1">
                                <div>
                                    <h1>General Commands (Page 1):</h1>
                                    <p className="portfolio-p" style={{margin: "0 10px"}} onClick={() => handleDropdown(1)}>{drops.element1 ? "⮟" : "⮜"}</p>
                                </div>
                                <div style={{display: drops.element1 ? "block" : "none"}}>
                                    <p>To Be Added</p>
                                </div>
                            </div>
                            <div id="cmd2">
                                <div>
                                    <h1>Fun Commands (Page 2):</h1>
                                    <p className="portfolio-p" style={{margin: "0 10px"}} onClick={() => handleDropdown(2)}>{drops.element2 ? "⮟" : "⮜"}</p>
                                </div>
                                <div style={{display: drops.element2 ? "block" : "none"}}>
                                    <p>To Be Added</p>
                                </div>
                            </div>
                            <div id="cmd3">
                                <div>
                                    <h1>Profile Commands (Page 3):</h1>
                                    <p className="portfolio-p" style={{margin: "0 10px"}} onClick={() => handleDropdown(3)}>{drops.element3 ? "⮟" : "⮜"}</p>
                                </div>
                                <div style={{display: drops.element3 ? "block" : "none"}}>
                                    <p>To Be Added</p>
                                </div>
                            </div>
                            <div id="cmd4">
                                <div>
                                    <h1>Economy Commands (Page 4):</h1>
                                    <p className="portfolio-p" style={{margin: "0 10px"}} onClick={() => handleDropdown(4)}>{drops.element4 ? "⮟" : "⮜"}</p>
                                </div>
                                <div style={{display: drops.element4 ? "block" : "none"}}>
                                    <p>To Be Added</p>
                                </div>
                            </div>
                            <div id="cmd5">
                                <div>
                                    <h1>Media Commands (Page 5):</h1>
                                    <p className="portfolio-p" style={{margin: "0 10px"}} onClick={() => handleDropdown(5)}>{drops.element5 ? "⮟" : "⮜"}</p>
                                </div>
                                <div style={{display: drops.element5 ? "block" : "none"}}>
                                    <p>To Be Added</p>
                                </div>
                            </div>
                            <div id="cmd6">
                                <div>
                                    <h1>Scenario Commands (Page 6):</h1>
                                    <p className="portfolio-p" style={{margin: "0 10px"}} onClick={() => handleDropdown(6)}>{drops.element6 ? "⮟" : "⮜"}</p>
                                </div>
                                <div style={{display: drops.element6 ? "block" : "none"}}>
                                    <p>To Be Added</p>
                                </div>
                            </div>
                            <div id="cmd7">
                                <div>
                                    <h1>Admin Commands (Page 6):</h1>
                                    <p className="portfolio-p" style={{margin: "0 10px"}} onClick={() => handleDropdown(7)}>{drops.element7 ? "⮟" : "⮜"}</p>
                                </div>
                                <div style={{display: drops.element7 ? "block" : "none"}}>
                                    <p>To Be Added</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}