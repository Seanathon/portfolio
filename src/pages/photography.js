import * as React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./photography.scss"


const IndexPage = ({ data }) => {
    const useState = React.useState;

    const [photos, setPhotos] = useState(data.allFile.nodes);

    function hexToHSL(H) {
        // Convert hex to RGB first
        let r = 0, g = 0, b = 0;
        if (H.length == 4) {
          r = "0x" + H[1] + H[1];
          g = "0x" + H[2] + H[2];
          b = "0x" + H[3] + H[3];
        } else if (H.length == 7) {
          r = "0x" + H[1] + H[2];
          g = "0x" + H[3] + H[4];
          b = "0x" + H[5] + H[6];
        }
        // Then to HSL
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
      
        if (delta == 0)
          h = 0;
        else if (cmax == r)
          h = ((g - b) / delta) % 6;
        else if (cmax == g)
          h = (b - r) / delta + 2;
        else
          h = (r - g) / delta + 4;
      
        h = Math.round(h * 60);
      
        if (h < 0)
          h += 360;
      
        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
      
        return [h, s, l];
    }

    const filterColor = (hue, bright) => {
        const filteredByColor = photos.filter(e => {
            const image = getImage(e.childrenImageSharp[0]),
                  hexValue = image.backgroundColor,
                  hslValue = hexToHSL(hexValue);

            // if (hslValue[0] >= 50 && hslValue[0] <= 310) {
                if (hslValue[2] >= bright && bright > 90 && hslValue[0] === 0) { 
                    return true 
                }
                else if (hslValue[2] <= bright && bright < 10 && hslValue[0] === 0) {
                    return true
                }
                else {
                    if (hslValue[0] <= hue + 40 && hslValue[0] >= hue - 40 && hue !== 0 && (hslValue[2] < 91 && hslValue[2] > 9) ) {
                        console.log("hexValue ", hexValue)
                        console.log("hslValue ", hslValue)
                        return true
                    }
                }
            // }
            // if (hslValue[0] < 50) {
            //     const negValue = 360 + (hslValue[0] - 50);
            //     if ((hslValue[0] < hue + 50 || negValue > negValue - 1 ) && hslValue[0] > hue - 50) return true;  
            // }
        })
        
        setPhotos(filteredByColor);
    }

    React.useEffect(() => {
        // Black (0, 9)
        // White (0, 91)
        // 180 Cold +/- 50
        // 100 Nuetral +/- 50
        // 50 Warm +/- 50
        // 230 Indigo +/- 50
        // 280 Violet +/- 50
        // setTimeout(filterColor(40), 5000);
    }, [])

    return (
        <Layout class="info">
            <Seo title="About Sean Yalda" />
            <div className="photo-grid">
                {
                    photos.map((e, i) => {
                        const image = getImage(e.childrenImageSharp[0]);
                        let styleName = '';
                        if (image.height > 1080 && image.width > 1080) {
                            if (image.height > image.width * 1.3) {
                                styleName = 'card-tall'
                            } 
                            if (image.width > image.height * 1.8) {
                                styleName = 'card-wide'
                            } 
                            if (i % 6 === 0 && styleName === '' && i !== 0 ) {
                                styleName = 'card-full'
                            } 
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
                fields: [size, name],
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
`

export default IndexPage