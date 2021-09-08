import * as React from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"

import CaseThumb from "./caseThumb/caseThumb"
import "./workGallery.scss"
import aaum from '../../../static/images/U-M-iphone.jpg'

const workGallery = () => (
    <div className="work-gallery">
      <CaseThumb title="PlayVS.com" />
      <CaseThumb title="GraphQL Blueprint" />
      <CaseThumb title="Alumni of University of Michigan" src="./../../images/U-M-iphone.jpg" />
    </div>
)

export default workGallery
