import * as React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./photography.scss"


const IndexPage = ({ data }) => {
    const photos = data.allFile.nodes;

    React.useEffect(() => {
        console.log(photos.map(e => getImage(e.childrenImageSharp[0])))
    })
    return (
        <Layout class="info">
            <Seo title="About Sean Yalda" />
            <div className="photo-grid">
                {
                    photos.map(e => {
                        const image = getImage(e.childrenImageSharp[0]);
                        let styleName;
                        if (image.height > image.width * 1.3) {
                            styleName = 'card-tall'
                        } 
                        if (image.width > image.height * 1.8) {
                            styleName = 'card-wide'
                        } 
                        return (
                            <GatsbyImage className={styleName} image={image} alt={'Yes'} />
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
    query AssetsPhotos {
        allFile(
            filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "photography"}}
            sort: {
                fields: [size],
                order: DESC
            }
        ) 
        {
            nodes {
                size
                childrenImageSharp {
                    gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
    }  
`

export default IndexPage