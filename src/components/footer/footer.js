import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./footer.scss"

const Footer = ({ social }) => (
    <div style={{position: 'static'}}>
        <footer>
            <div className="description">Software Engineer and UX Design Consultant specialising in content, growth and marketing.</div>
            <ul className="pages">
                <li><Link to="/info">Info</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <ul className="ancillary">
                <li><Link to="/newsletter">Newsletter</Link></li>
                <li><Link to="/bookshelf">Bookshelf</Link></li>
            </ul>
            <ul className="social">
                <li><Link to={`https://linkedin.com/in/${social.in}`}>LinkedIn</Link></li>
                <li><Link to={`https://instagram.com/${social.ig}`}>Instagram</Link></li>
                <li><Link to={`https://github.com/${social.github}`}>GitHub</Link></li>
                <li><Link to={`https://twitter.com/${social.twitter}`}>Twitter</Link></li>
            </ul>
            <div className="cta">Need help or have a new project?<br /><Link to="/contact">Contact</Link></div>
            <div className="email">Email at<br /><a href="mailto:seanyalda@gmail.com">seanyalda@gmail.com</a></div>
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
