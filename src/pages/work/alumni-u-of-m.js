import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const uofm = () => (
  <Layout pageType="work">
    <Seo title="Alumni Association of the University of Michigan - Sean Yalda" />
    <div className="intro intro__case-study">
      <h1>
        <small>Alumni Association of the</small>
        University of Michigan
      </h1>
      <p>The Alumni Association of the University of Michigan’s serves as an independent gateway for alums of all identities, backgrounds, and experiences – across the globe and in our neighborhoods – in order to create and deepen belonging to the Michigan Family.</p>
    </div>
    <div className="row">
      <ul className="bullets">
        <li className="title">Credits</li>
        <li>In collaboration with Pitch Black Media</li>
        <li>Alumni Association of U of M</li>
        <li>Representatives from Salesforce</li>
      </ul>
      <ul className="bullets">
        <li className="title">Info</li>
        <li>Association Member Login + Signup</li>
        <li>JavaScript, Sass, PHP, Python</li>
        <li>Client-side filtering of events and trips</li>
        <li>Salesforce CRM Integration</li>
      </ul>
      <ul className="bullets">
        <li className="title">Services</li>
        <li>UX/UI Design</li>
        <li>Front End Development</li>
        <li>Back End Development</li>
        <li>Information Architecture</li>
      </ul>
    </div>
    <div className="featured-image__work">
      <StaticImage
        src="../../../static/images/U-M-featured.jpg"
        alt="Sean Yalda journaling"
        placeholder="dominantColor"
        loading="eager"
      />
    </div>
    <div className="intro intro__case-study">
      <h2>
        The Challenge
      </h2>
      <p>Even though GraphQL is a query and data manipulation language that allows developers to build apps faster than ever, it still feels unweildy in its setup. Adding it to a project that has a lot of data takes time. We wanted to create an app that generates the repetitive/tedious side of GraphQL effortlessly while still giving you the ability to take advantage of all its glory.</p>
    </div>
    <div className="image-gallery image-gallery__3x2">
        <StaticImage
          src="../../../static/images/U-M-menu-on-ipad.jpg"
          alt="U of M Elegant Menu"
          placeholder="dominantColor"
          loading="lazy"
        />
        <div>
            <StaticImage
              src="../../../static/images/U-M-iphone.jpg"
              alt="U of M website on iphone"
              placeholder="dominantColor"
              loading="lazy"
            />
            <StaticImage
              src="../../../static/images/U-M-about.jpg"
              alt="U of M about page"
              placeholder="dominantColor"
              loading="lazy"
            />
        </div>
    </div>
    <div className="intro intro__case-study">
      <h2>
        The Approach
      </h2>
      <p>Utilize a GUI to allow developers to export production level database, server and client side code to be included into your React & Express projects. Essentially, it produces boilerplate code based on the schema you design. With GraphQL Blueprint, we give users the ability to create a project by modeling multi-database schemas then export the necessary files to run your GraphQL server and app locally.</p>
    </div>
    <hr />
    <div className="intro intro__case-study">
      <h2>
        Front End Development
      </h2>
      <div>
        <p>Utilize a GUI to allow developers to export production level database, server and client side code to be included into your React & Express projects. Essentially, it produces boilerplate code based on the schema you design. With GraphQL Blueprint, we give users the ability to create a project by modeling multi-database schemas then export the necessary files to run your GraphQL server and app locally.</p>
        <ul className="bullets">
          <li></li>
          <li>1. Using tabbed windows makes it easy for users to switch between our various views.</li>
          <li>2. Micro interactions are enabled with each individual component enabling full CRUD operations.</li>
          <li>3. Our tree view (Data visualization with D3.js) gives users a bird eye view of their schema.</li>
          <li>4. Keeping the interface minimal is key to emphasize jobs-to-be-done rather than distract from it.</li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="intro intro__case-study">
      <h2>
        Back End Development
      </h2>
      <div>
        <p>Utilize a GUI to allow developers to export production level database, server and client side code to be included into your React & Express projects. Essentially, it produces boilerplate code based on the schema you design. With GraphQL Blueprint, we give users the ability to create a project by modeling multi-database schemas then export the necessary files to run your GraphQL server and app locally.</p>
        <ul className="bullets">
          <li></li>
          <li>1. Using tabbed windows makes it easy for users to switch between our various views.</li>
          <li>2. Micro interactions are enabled with each individual component enabling full CRUD operations.</li>
          <li>3. Our tree view (Data visualization with D3.js) gives users a bird eye view of their schema.</li>
          <li>4. Keeping the interface minimal is key to emphasize jobs-to-be-done rather than distract from it.</li>
        </ul>
      </div>
    </div>
    <div className="image-gallery">
        <StaticImage
          src="../../../static/images/U-M-menu-on-ipad.jpg"
          alt="U of M Elegant Menu"
          placeholder="dominantColor"
          loading="lazy"
        />
        <StaticImage
          src="../../../static/images/U-M-iphone.jpg"
          alt="U of M website on iphone"
          placeholder="dominantColor"
          loading="lazy"
        />
        <StaticImage
          src="../../../static/images/U-M-about.jpg"
          alt="U of M about page"
          placeholder="dominantColor"
          loading="lazy"
        />
    </div>
    <div className="intro intro__case-study">
      <h2>
        UX/UI Design
      </h2>
      <div>
        <p>Utilize a GUI to allow developers to export production level database, server and client side code to be included into your React & Express projects. Essentially, it produces boilerplate code based on the schema you design. With GraphQL Blueprint, we give users the ability to create a project by modeling multi-database schemas then export the necessary files to run your GraphQL server and app locally.</p>
        <ul className="bullets">
          <li></li>
          <li>1. Using tabbed windows makes it easy for users to switch between our various views.</li>
          <li>2. Micro interactions are enabled with each individual component enabling full CRUD operations.</li>
          <li>3. Our tree view (Data visualization with D3.js) gives users a bird eye view of their schema.</li>
          <li>4. Keeping the interface minimal is key to emphasize jobs-to-be-done rather than distract from it.</li>
        </ul>
      </div>
    </div>
    <div className="intro intro__stretch">
      <p>In the process of building GraphQL Blueprint, we tackled some interesting challenges with data validation, modeling, visualization, state management, parsing algorithms, file systems, and documentation. The goal: empower engineers to build GraphQL schemas in a fraction of a time into their full stack React.js apps. Check out the GitHub repo for more information or use the app in the URL below.</p>
      <h1>visit <Link href="https://alumni.umich.edu/" target="_blank">alumni.umich.edu</Link></h1>
    </div>
  </Layout>
)

export default uofm