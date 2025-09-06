import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// import resume from "../../static/files/SeanYalda-2021-SE-Resume.pdf"

const IndexPage = () => (
  <Layout class="info">
    <Seo title="About Sean Yalda" />
    <div className="featured-image__about">
        <StaticImage
          src="../../static/images/sean-yalda-polaroid.jpg"
          alt="Sean Yalda journaling"
          placeholder="dominantColor"
          loading="eager"
        />
        <div className="mask mask__linear-right"></div>
    </div>
    <div className="intro intro__right">
      <h1>About Sean Yalda</h1>
      <p>Sean has been bringing ideas to life online since 2002. With over a decade of experience in tech startups and creative agencies, he's helped businesses grow, adapt, and connect — often by merging design with engineering in meaningful ways.</p>
      <p>From his earliest ventures — turning side projects into full-time jobs — Sean has been motivated by a desire to make systems smoother, stories clearer, and life a little easier through thoughtful strategy, design, and technology. That drive hasn't gone away; it's just matured.</p>
      <p>His work has touched industries like education, sports, music, science, real estate, art, and retail. Whether it's information architecture or UX research, interface design or front-end engineering — Sean's focus is aligning digital experiences with human needs.</p>
      <div className="actions">
        <a href="https://www.linkedin.com/in/sean-yalda/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/seanathon" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.instagram.com/sleepysensei/" target="_blank" rel="noopener noreferrer">Instagram</a>
          {/* <a href={resume}>Developer Resume</a><br /> */}
          {/* <a href="#">Designer Resume</a> */}
      </div>
    </div>
    <div className="row info">
      <h2>Clients</h2>
      <ul className="bullets">
          <li></li>
          <li>Sayari</li>
          <li>PlayVS</li>
          <li>Pitch Black Media</li>
          <li>Michigan Science Center</li>
          <li>FACINGS</li>
          <li>Oakland University</li>
          <li>8° Plato</li>
          <li>Matt Sukkar</li>
      </ul>
      <ul className="bullets">
          <li></li>
          <li>Prettybird Productions</li>
          <li>Open Source Labs</li>
          <li>Unforgettable Gala (2018)</li>
          <li>Fourclops</li>
          <li>Alumni Association of U of M</li>
          <li>Sun Communities</li>
          <li>City of Detroit</li>
          <li>EVERYWHERE</li>
      </ul>
    </div>
    <div className="row info">
      <h2>Services</h2>
      <ul className="bullets">
          <li></li>
          <li>Software Engineering</li>
          <li>Information Architecture</li>
          <li>UX/UI Design</li>
          <li>Pitch Deck Design</li>
          <li>Creative Direction</li>
      </ul>
      <ul className="bullets">
          <li></li>
          <li>Product Management</li>
          <li>System Design</li>
          <li>Photography</li>
          <li>Prototype Design</li>
          <li>Consulting</li>
      </ul>
    </div>
    <div className="row info">
      <h2>Key Strengths</h2>
      <ul className="bullets">
          <li></li>
        <li>Full Stack Development</li>
        <li>Strategic Vision</li>
        <li>Building and Scaling Teams</li>
        <li>User Research</li>
        <li>Usability Testing</li>
      </ul>
      <ul className="bullets">
          <li></li>
        <li>Data &amp; Content Modeling</li>
        <li>Presentations</li>
        <li>Process &amp; Documentation Creation</li>
        <li>Cost/Value Analysis</li>
        <li>Data Structures</li>
      </ul>
    </div>
    <div className="image-gallery image-gallery__3x2">
        <StaticImage
          src="../../static/images/sean-yalda-iceland.jpg"
          alt="Sean Yalda on a Mountain in Iceland"
          placeholder="dominantColor"
          loading="lazy"
        />
        <div>
            <StaticImage
              src="../../static/images/sean-yalda-portrait.jpg"
              alt="Sean Yalda Portrait on the Computer"
              placeholder="dominantColor"
              loading="lazy"
            />
            <StaticImage
              src="../../static/images/sean-yalda-group.jpg"
              alt="Sean Yalda with a Group of Creatives"
              placeholder="dominantColor"
              loading="lazy"
            />
        </div>
    </div>
    <div className="intro intro__inset">
      <h2>Narrative Systems &amp; Empathetic Strategy</h2>
      <p>Sean often takes on hybrid roles where design meets code and business meets culture. He's fluent in metrics like KPIs and ROI, but rooted in the belief that the best outcomes come from empathy-driven thinking. He thrives in collaborative environments but knows how to navigate solo terrain — especially when building from scratch.</p>
      <p>Currently based in Los Angeles, Sean designs and develops brands, products, and services with momentum. He starts most days by resetting his space — a habit that reflects his deeper approach to work: clear the clutter, trust the process.</p>
      <p>His goals are both personal and far-reaching: to enrich society through good design and to build generational wealth with integrity.</p>
      <p>A believer in curiosity and contrast, Sean draws inspiration from long walks, conversations with strangers, and moments of stillness. He's comfortable stepping into new roles, new cities, or new ideas — often finding insight where others might not look.</p>
      <p>He's collaborative by nature, with a deep respect for culture, rhythm, and story. Whether he's working with nonprofits or global brands, he brings the same thoughtful energy to the table: listen first, build with care.</p>
    </div>
    <aside>
    <ul className="bullets">
        <li className="title">Sean’s Background</li>
        <li>First Generation Assyrian/Chaldean-American</li>
        <li>Originally from Detroit, now based in Los Angeles</li>
        <li>Majored in Graphic Design & Illustration</li>
        <li>Self-taught engineer and startup founder</li>
        <li>Built products used by hundreds of thousands</li>
        <li>Created tools like <a href="https://cube.hywn.com">The Cube</a> & <a href="https://breakingchanges.ai">BreakingChanges.ai</a></li>
        <li>Early adopter of AI for creative and technical workflows</li>
        <li>World traveler — 47 U.S. states, 3 continents (so far)</li>
        <li>Fatherhood reshaped his creative perspective</li>
        <li>Believes in generational impact through design & tech</li>
        <li>Former touring musician and busker (still jams when he can)</li>
        <li>Hands-on with both code and carpentry (builds things that last)</li>
        <li>Thrives in solo projects and collaborative teams alike</li>
        <li>Knows how to read people, fix things, and spot patterns</li>
        <li>U.S. Patent holder & classified inventor</li>
        <li>Active contributor to open source projects</li>
        <li>Helped raise over $100M in funding through pitch design</li>
    </ul>
</aside>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
