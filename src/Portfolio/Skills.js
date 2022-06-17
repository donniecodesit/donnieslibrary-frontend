import React from "react";
import img_computer from "../Images/computertools.png";

export default function Skills() {
  return (
    <article className="container-fluid" id="skills">
      <section className="introbox">
        <div>
          <img src={img_computer} className="border border-secondary rounded-circle" alt="Donovan" style={{ width: "15vw" }}/>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 className="portfolio-h2">Technical Skills:</h2>
          <p className="portfolio-p mb-0" style={{ fontWeight: "bold" }}>
            Languages and Libraries:
          </p>
          <p className="portfolio-p mt-0">
            JavaScript, SQL, Express, React, Node.JS, HTML, CSS, C#,
            Discord.Net, Mocha, Chai
          </p>
          <p className="portfolio-p mb-0" style={{ fontWeight: "bold" }}>
            Programs and Tools:
          </p>
          <p className="portfolio-p mt-0">
            Visual Studio Code, Git, GitHub, MongoDB, Node Package Manager,
            Heroku, Vercel
          </p>
          <p className="portfolio-p mb-0" style={{ fontWeight: "bold" }}>
            Other:
          </p>
          <p className="portfolio-p mt-0">
            Kdenlive <i>(Video Editing)</i>, Paint.NET <i>(Image Editing)</i>
            <br />
            Substance Painter <i>(Model Texturing)</i>, Unity{" "}
            <i>(VRChat Publishing)</i>
          </p>
        </div>
      </section>
    </article>
  );
}
