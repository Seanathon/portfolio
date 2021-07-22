import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Sean Yalda" />
    <div className="intro">
      <h2>A Software Engineer &amp; Interactive Designer  experienced in information architecture, product management, and growth marketing.</h2>
      <p>Using design &amp; technology, I’ve helped teams across the country take their objectives and translate them into growth strategies that were researched, executed, measured, and ultimately achieved through impactful brands, products, and services.</p>
    </div>

    <div className="work-gallery">
      Work goes here
    </div>
    
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
