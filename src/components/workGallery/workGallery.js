import * as React from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"

import CaseThumb from "./caseThumb/caseThumb"
import "./workGallery.scss"

const workGallery = () => (
    <div className="work-gallery">
      <CaseThumb title="Working" />
      <CaseThumb />
      <CaseThumb />
      <CaseThumb />
      <CaseThumb />
      <CaseThumb />
    </div>
)

export default workGallery
