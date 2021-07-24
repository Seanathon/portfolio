import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="About Sean Yalda" />
    <div className="featured-image__about">
        <img src="../../images/sean-yalda-polaroid.jpg" alt="Sean Yalda journaling" />
        <div className="mask mask__linear-right"></div>
    </div>
    <div className="intro intro__right">
      <h2>About Sean Yalda</h2>
      <p>Sean has been bringing ideas online since 2002. Professionally, he’s been employed in tech startups and digital agencies for eight years now. In this time, he’s helped many businesses make a profit &amp; impact.</p>
      <p>Early on, Sean realized he was driven to make people’s lives easier through strategy, design, and technology. Needless to say, he’s still driven.</p>
      <p>His expertise has aided organizations across education, sports, music, science, art, real estate, entertainment, retail, and more. Things like Information architecture, UX research, interface design, and software engineering. </p>
      <div className="actions">
          <a href="#">Developer Resume</a><br />
          <a href="#">Designer Resume</a>
      </div>
    </div>
    <ul className="bullets">
        <li className="title">Previously worked with</li>
        <li>PlayVS</li>
        <li>Pitch Black Media</li>
        <li>Prettybird Productions</li>
        <li>FACINGS</li>
        <li>Oakland University</li>
    </ul>
    <ul className="bullets">
        <li className="title">Services</li>
        <li>Software Engineering &amp; Web Development</li>
        <li>Information Architecture &amp; System Design</li>
        <li>User Experience &amp; Interface Design</li>
        <li>Pitch Deck &amp; Prototype Design</li>
        <li>Creative Direction &amp; Consulting</li>
    </ul>
    <ul className="bullets">
        <li className="title">Key Strengths</li>
        <li>Strategic Vision &amp; Creative thinking</li>
        <li>Building and Scaling Teams</li>
        <li>Excellent Presentation Skills</li>
        <li>Process &amp; Documentation Creation</li>
        <li>Cost/Value Analysis</li>
    </ul>
    <div className="image-gallery image-gallery__3x2">
        <img src="../../images/sean-yalda-iceland.jpg" />
        <div>
            <img src="../../images/sean-yalda-portrait.jpg" />
            <img src="../../images/sean-yalda-group.jpg" />
        </div>
    </div>
    <div className="intro intro__inset">
      <h2>Storytelling &amp; content strategy<br />Culture &amp; computer interaction</h2>
      <p>Sean often finds himself working within teams at the intersection of design & engineering, measuring his own value based off the return on investment companies get by hiring him using KPIs. Despite his broad creative skillset and experience, he’s equally effective in a specialized role (like software engineering).</p>
      <p>Based in LA, he likes to set momentum for work by cleaning his space — Decluttering progress from yesterday. He then spends his time designing & developing brands, products, and services. His goals: enrich society and earn generational wealth.</p>
      <p>Sean likes to find ways to thrive in life while honoring my environment and the people in it. He follows joy where it leads him, but remembers to stay in touch with his other emotions. He like long walks; a meditative activity that breeds new ideas. He’s collaborative by nature and loves working with passionate teams who’re chasing amazing opportunities.</p>
    </div>
    <aside>
        <ul className="bullets">
            <li className="title">What they say</li>
            <li>Creative thinker</li>
            <li>Highly skilled</li>
            <li>Problem solver</li>
            <li>Patient mentor</li>
        </ul>
        <ul className="bullets">
            <li className="title">Sean’s background</li>
            <li>First Generation Assyrian/Chaldean-American</li>
            <li>Majored in Graphic Design &amp; Illustration</li>
            <li>Originally from Detroit, Based in Los Angeles</li>
            <li>Been to countries in 3 continents, 47 states</li>
        </ul>
        <ul className="bullets">
            <li className="title">What Sean’s parents think</li>
            <li>He’s a computer guy</li>
            <li>He’s a dreamer</li>
            <li>He’s good with kids</li>
            <li>He’s got a lot of friends</li>
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
