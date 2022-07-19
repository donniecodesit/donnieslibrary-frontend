import React from 'react'

export default function VideoBox() {
  return (
    <article className="container-fluid slideFromLeft" id="contact">
        <section className="introbox">
            <div>
                <h2 className="portfolio-h2">Wanna Vibe?</h2>
            </div>
            <div>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yEPUhesWICA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    </article>
  )
}