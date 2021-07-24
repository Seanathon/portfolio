import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
// import { GatsbyImage, getSrc } from "gatsby-plugin-image"

const CaseThumb = ({ src, alt, title }) => {
    // const image = getSrc(`../../images/${src}`)
    // console.log(image)
    return (
        <div>
            <div className="featured-image">
                <img src={`./../../images/${src}`} alt={alt} />
                {/* <GatsbyImage
                    image={image}
                    alt={alt}
                    loading="lazy"
                    objectFit="cover"
                /> */}
            </div>
            <h3>{title}</h3>
        </div>
    )   
}

CaseThumb.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string
}

CaseThumb.defaultProps = {
    src: 'sample-work-thumbnail.jpg',
    alt: 'Case Study',
    title: 'Case Study'
}

export default CaseThumb
