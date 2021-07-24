import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found — Sean Yalda" />
    <h1
      style={{
        gridColumn: "1 / span 4",
      }}
    >404: Not Found</h1>
    <p
      style={{
        gridColumn: "5 / span 4",
      }}
    >You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
