import React from "react";

export default function Introduction() {
  return (
    <article className="container-fluid" id="intro">
      <section className="InfoRow">
        <div className="col-lg-5">
          <img
            src="https://avatars.githubusercontent.com/u/91988909?v=4"
            className="border border-secondary rounded-circle"
            alt="Donovan"
          />
        </div>
        <div className="col-lg-7">
          <h2 className="portfolio-h2">Looking for a Web Developer?</h2>
          <h3 className="portfolio-h3">Here's my introduction!</h3>
          <p className="portfolio-p">
            Hello there! My name is Donovan, I'm a Web Developer and Software
            Engineer who is still learning a lot about development, coming from
            a background in Content Creation. From November 2021 to April 2022,
            I was enrolled in Thinkful's Immersive Software Engineering Program,
            kicking off learning Web Development! I was born and grew up in
            North Carolina and after 2019, moved to Phoenix, Arizona to live
            with some really great friends of mine who supported my career path.
            Content Creation and Streaming are both amazing things to do, but
            better suited as a hobby and not a career as it can take years to
            launch well enough to pay for a living. My audience has grown and
            reached over 53,000 people and while it is not a focus of mine, I
            hope to continue doing it as a hobby once my career is figured out.
          </p>
          <p className="portfolio-p">
            I am proficient with JavaScript, working with Node, React, Express,
            and more sub-libraries depending on the project. I also have
            experience with SQL and NoSQL databases, using ElephantSQL and
            MongoDB. I've written and worked on backend, frontend, and
            full-stack web applications. One of my best and most favorite
            personal projects is written with C# using Discord.NET, and is
            connected to a MongoDB managing profile for over 50,000 users!
          </p>
          <p className="portfolio-p">
            Feel welcome to explore this webpage and contact me (email
            preferred) if you need to!
          </p>
        </div>
      </section>
    </article>
  );
}
