import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const gql = () => (
  <Layout pageType="work">
    <Seo title="Alumni Association of the University of Michigan - Sean Yalda" />
    <div className="intro intro__case-study">
      <h1>
        GraphQL Blueprint
      </h1>
      <p>A developer tool for developers that want to quickly generate React, Express, Apollo and GraphQL boilerplate code using a data modeling interface. Watch your queries, mutations, and schema update in realtime with our code preview feature and finally, export it.</p>
    </div>
    <div className="row">
      <ul className="bullets">
        <li className="title">Credits</li>
        <li>Dylan Li, Software Engineer</li>
        <li>Kevin Berlanga, Software Engineer</li>
        <li>Ethan Yeh, Software Engineer</li>
        <li>Based on GraphQL Designer</li>
      </ul>
      <ul className="bullets">
        <li className="title">Info</li>
        <li>Open Source Software</li>
        <li>Data Modeling</li>
        <li>React, Redux, Express, Apollo, GraphQL</li>
        <li>Full Stack Boilerplate Code Generator</li>
      </ul>
      <ul className="bullets">
        <li className="title">Services</li>
        <li>UX/UI Design</li>
        <li>Front End Development</li>
        <li>Back End Development</li>
        <li>Data Modeling</li>
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
      <p>Even though GraphQL is a query and data manipulation language that allows developers to build apps faster than ever, it still feels unweildy in its setup. Adding it to a project that has a lot of data takes time. We wanted to create an app that generates the repetitive/tedious side of GraphQL effortlessly while still giving you the ability to take advantage of all its glory. </p>
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
        <p>Using comprehensive state management (with Redux) was key in order to supply the parsing algorithms the necessary data to dynamically generate deeply nested code while preventing the apps execution thread from being blocked when writing files. GraphQL Blueprint’s UI updates its state on every interaction, storing what the user tells it to with its data modeling inspired design.</p>
        <ul className="bullets">
          <li></li>
          <li>1. A customized version of Material UI is applied to React.js </li>
          <li>2. D3.js brings the data model the user creates to life in a tree graph with vector graphics.</li>
          <li>3. The boilerplate code is previewable at any moment while the user builds their schema.</li>
          <li>4. What kind of metrics would we need to measure in order to know we’re on track?</li>
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
        Back End Development
      </h2>
      <div>
        <p>UX research & design activities were employed to encourage stakeholder support and collaboration like user personas, user journeys, site-mapping, industry & competitive analysis, wireframing and usability testing. Whenever budget was tight, we researched best practices and got feedback from our customers to inform our decisions.</p>
        <ul className="bullets">
          <li></li>
          <li>1. Who are our users and what are their behaviors and needs?</li>
          <li>2. What information did users desire most from PlayVS? </li>
          <li>3. How best could we communicate &amp; display the PlayVS vision, mission, and stories?</li>
          <li>4. How could we differentiate ourselves from others in the industry without confusing users?</li>
          <li>5. How do we design the best interface to fulfill all of our goals while staying accessible?</li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="intro intro__case-study">
      <h2>
        Web Development Management
      </h2>
      <div>
        <p>We needed to take advantage of the latest tools and technology in order to truly be agile in our approach. An all JavaScript application (Next.js/Node.js), headless CMS with decoupled frontend, equipped with version control, a CI/CD pipeline, AWS/Elastic Beanstalk, and project management software in order to adapt to the company’s ever fluctuating needs &amp; priorities. Some insight to our choices:</p>
        <ul className="bullets">
          <li></li>
          <li>1. Using cost/value analysis (low cost/high value), we developed items with biggest impact first.</li>
          <li>2. We needed a partner that could adapt to our changing needs &amp; budget. UA5 made the cut.</li>
          <li>3. We designed the system to support the company, their partners &amp; community needs.</li>
          <li>4. A seamless process with a people-first mindset; strategy to design to development to launch.</li>
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
        <p>Following some our most successful predecessors, GraphQL Blueprint is designed with our primary users in mind: software engineers. Studying the apps that they’re already using (Figma, Google Suite, Adobe Creative Suite, Jira, GitHub, etc.), we came up with an interface that would appear intuitive and easy to understand.</p>
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
      <h1>visit <Link href="http://graphqlblueprint.xyz/" target="_blank">graphqlblueprint.xyz</Link></h1>
    </div>
  </Layout>
)

export default gql