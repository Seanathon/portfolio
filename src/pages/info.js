import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Work from "../components/workGallery/workGallery"

const IndexPage = () => (
  <Layout>
    <Seo title="Sean Yalda" />
    <div className="intro intro__right">
      <h2>About Sean Yalda</h2>
      <p>Sean has been bringing ideas online since 2002. Professionally, he’s been employed in tech startups and digital agencies for eight years now. In this time, he’s helped many businesses make a profit &amp; impact.</p>
      <p>Early on, Sean realized he was driven to make people’s lives easier through strategy, design, and technology. Needless to say, he’s still driven.</p>
      <p>His expertise has aided organizations across education, sports, music, science, art, real estate, entertainment, retail, and more. Things like Information architecture, UX research, interface design, and software engineering. </p>
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
    <div className="intro intro__inset">
      <h2>Storytelling &amp; content strategy<br />Culture &amp; computer interaction</h2>
      <p>Sean often finds himself working within teams at the intersection of design & engineering, measuring his own value based off the return on investment companies get by hiring him using KPIs. Despite his broad creative skillset and experience, he’s equally effective in a specialized role (like software engineering).</p>
      <p>Based in LA, he likes to set momentum for work by cleaning his space — Decluttering progress from yesterday. He then spends his time designing & developing brands, products, and services. His goals: enrich society and earn generational wealth.</p>
      <p>Sean likes to find ways to thrive in life while honoring my environment and the people in it. He follows joy where it leads him, but remembers to stay in touch with his other emotions. He like long walks; a meditative activity that breeds new ideas. He’s collaborative by nature and loves working with passionate teams who’re chasing amazing opportunities.</p>
    </div>
    <aside>
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
