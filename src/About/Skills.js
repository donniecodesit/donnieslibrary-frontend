import React from "react";
import image from "../Images/computertools.png";

export default function Skills() {
  return (
    <article className="container-fluid my-3" id="skills">
      <section className="InfoRow">
        <div className="col-lg-5">
          <img src={image} alt="pink square" className="rounded" />
        </div>
        <div className="col-lg-7">
          <h2 className="portfolio-h2">Technical Skills:</h2>
          <p className="portfolio-p mb-0" style={{ fontWeight: "bold" }}>
            Languages and Libraries:
          </p>
          <p className="portfolio-p mt-0">
            JavaScript, SQL, Express, React, Node.JS, HTML, CSS, C#, Discord.Net
          </p>
          <p className="portfolio-p mb-0" style={{ fontWeight: "bold" }}>
            Programs and Tools:
          </p>
          <p className="portfolio-p mt-0">
            Visual Studio Code, Git, GitHub, MongoDB, Node Package Manager,
            Heroku, Vercel, Mocha, Chai
          </p>
          <p className="portfolio-p mb-0" style={{ fontWeight: "bold" }}>
            Other:
          </p>
          <ul className="portfolio-ul" style={{ listStyle: "none", padding: "0px" }}>
            <li className="portfolio-li">
              Kdenlive <i>(Video Editing)</i>
            </li>
            <li className="portfolio-li">
              Paint.NET <i>(Image Editing)</i>
            </li>
            <li className="portfolio-li">
              Substance Painter <i>(Model Texturing)</i>
            </li>
            <li className="portfolio-li">
              Unity <i>(VRChat Publishing)</i>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
