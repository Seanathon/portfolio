import * as React from "react"
import { Link } from "gatsby"
import "./footer.scss"

const Footer = ({ social }) => (
    <div style={{position: 'static'}}>
        <footer>
            <div className="description">Sean Yalda is a Software Engineer and UX Design Consultant specialising in content, growth and marketing.</div>
            <ul className="pages">
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/photography">Photography</Link></li>
                {/* <li><Link to="/work">Work</Link></li> */}
                {/* <li><Link to="/contact">Contact</Link></li> */}
            </ul>
            <ul className="ancillary">
                {/* <li><Link to="/newsletter">Newsletter</Link></li> */}
                {/* <li><Link to="/bookshelf">Bookshelf</Link></li> */}
            </ul>
            <ul className="social">
                <li><a href={`https://linkedin.com/in/${social.in}`}>LinkedIn</a></li>
                <li><a href={`https://instagram.com/${social.ig}`}>Instagram</a></li>
                <li><a href={`https://github.com/${social.github}`}>GitHub</a></li>
                <li><a href={`https://twitter.com/${social.twitter}`}>Twitter</a></li>
            </ul>
            <div className="cta">Need help or have a new project?{/*<br /><Link to="/contact">Contact</Link>*/}</div>
            <div className="email">Email at<br /><a href="mailto:seanyalda@pm.me">seanyalda@pm.me</a></div>
            <div className="phone">Call or text<br /><a href="tel:+15862954265">+1 (586) 295–4265</a></div>
            <div className="copyright"><b>©</b> 2020–{new Date().getFullYear()} <a href="https://www.seanyalda.com">Sean Yalda</a>. All rights reserved.</div>
        </footer>
    </div>
)

Footer.defaultProps = {
  social: {
      ig: 'sleepysensei',
      twitter: 'seanyalda',
      in: 'sean-yalda',
      unsplash: 'sleepysensei',
      github: 'seanathon'
  },
}

export default Footer
