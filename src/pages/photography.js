import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./photography.scss"


const IndexPage = () => {
    const useState = React.useState;

    const data = useStaticQuery(graphql`
        query AssetsPhotos {
            allFile(
                filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "photography"}}
                sort: {
                    fields: [name, size],
                    order: [DESC, ASC]
                }
            ) 
            {
                nodes {
                    name
                    size
                    childrenImageSharp {
                        gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP])
                    }
                }
            }
        }  
    `)

    const allPhotos= data.allFile.nodes;
    const [photos, setPhotos] = useState([...allPhotos.slice(0, 12)]);
    const [loadMore, setLoadMore] = useState(false);
    const [hasMore, setHasMore] = useState(allPhotos.length > 10)
    const loadRef = React.useRef()

    const handleObserver = (entities) => {
        const target = entities[0]
        if (target.isIntersecting) {
          setLoadMore(true)
        }
    }

    // Initialize the intersection observer API
    React.useEffect(() => {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0,
        }
        const observer = new IntersectionObserver(handleObserver, options)
            if (loadRef.current) {
            observer.observe(loadRef.current)
        }
    }, [])

    // Handle loading more articles
    React.useEffect(() => {
        if (loadMore && hasMore) {
          const currentLength = photos.length
          const isMore = currentLength < allPhotos.length
          const nextResults = isMore
            ? allPhotos.slice(currentLength, currentLength + 10)
            : []
          setPhotos([...photos, ...nextResults])
          setLoadMore(false)
        }
      }, [loadMore, hasMore]) //eslint-disable-line

    // Check if there is more
    React.useEffect(() => {
        const isMore = photos.length < allPhotos.length
        setHasMore(isMore)
    }, [photos]) //eslint-disable-line

    return (
        <Layout class="info">
            <Seo title="Photography of Sean Yalda" />
            <div className="photo-grid">
                {
                    photos.map((e, i) => {
                        const image = getImage(e.childrenImageSharp[0]);
                        let styleName = '';
                        if (image.height > 1080 && image.width > 1080) {
                            if (image.height > image.width * 1.3) {
                                styleName = 'card-tall'
                            } 
                            if (image.width > image.height * 1.75) {
                                styleName = 'card-wide'
                            } 
                            if (i % 5 === 0 && styleName === '' && i !== 0 ) {
                                styleName = 'card-full'
                            } 
                        }
                        return (
                            <GatsbyImage key={image.name} className={styleName} image={image} alt={'Yes'} />
                        )
                    })
                }
            </div>
            <div ref={loadRef}>
                {/* {hasMore ? <p>Loading...</p> : <p>No more results</p>} */}
            </div>
        </Layout>
    )
}

export default IndexPage