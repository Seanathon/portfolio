import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const playvs = () => (
  <Layout pageType="work">
    <Seo title="Alumni Association of the University of Michigan - Sean Yalda" />
    <div className="intro intro__case-study">
      <h1>
        PlayVS
      </h1>
      <p>PlayVS built the infrastructure and platform for high school and collegiate esports. They work with game publishers and high school governing bodies to build and operate sanctioned leagues across the country.</p>
    </div>
    <div className="row">
      <ul className="bullets">
        <li className="title">Credits</li>
        <li>In collaboration with Use All 5 (UA5)</li>
        <li>PlayVS Product + Marketing teams</li>
      </ul>
      <ul className="bullets">
        <li className="title">Info</li>
        <li>Component-driven Next.js Website</li>
        <li>Headless CMS (Prismic)</li>
        <li>React, Node.js, and REST API</li>
        <li>AWS Elastic Beanstalk</li>
      </ul>
      <ul className="bullets">
        <li className="title">Services</li>
        <li>Web Development Management</li>
        <li>Information Architecture</li>
        <li>UX Design</li>
        <li>Front End Development</li>
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
      <p>The PlayVS growth & marketing team executed anywhere between 10 to 20 initiatives per quarter and needed a web solution that would support it. Initiatives included PlayVS Academy, Game Changers, summer/winter tournaments, regional marketing pages, and more. Their website needed to constantly evolve with all their programs in mind without being bottlenecked by the engineering team’s capacity.</p>
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
      <p>From sitemap to individual page layout, the solution needed to be adaptable from the start. For this, we used a component-based architecture and content model that could grow alongside the company without causing massive overhead everytime an initiative was introduced. Using Prismic, we gave non-technical employees the ability to update the website on the fly. We ultimately built a website that could adapt to the ever-changing needs of this fast-paced startup in a new industry.</p>
    </div>
    <hr />
    <div className="intro intro__case-study">
      <h2>
        Information Architecture
      </h2>
      <div>
        <p>First, we had to understand what the brand needed; not only in the moment, but at least one year down the road too. We seeked a solution that ended up intersecting at sports, education, and technology. We used the Pareto Principle (80-20 rule) to think of the website as a 80% SaaS company site and 20% community focused portal. Here are some of the questions we had to answer.</p>
        <ul className="bullets">
          <li></li>
          <li>1. How would we architect the sitemap to fit current and future programs &amp; initiatives?</li>
          <li>2. What kind of components would we need to fit our content model?</li>
          <li>3. Will our users in this new industry understand how to navigate and use our website naturally?</li>
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
        UX/UI Design
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
        Front End Development
      </h2>
      <div>
        <p>Using Prismic’s REST API and the PlayVS product API, we produced a large website with minimal back-end code. The website was comprised of ~30 components that could be organized into landing pages, micro sites, and more on the fly. This ultimately empowered the growth & marketing team to execute their initiatives freely. Some things we always had to keep in mind:</p>
        <ul className="bullets">
          <li></li>
          <li>1. Minimal network requests and fast page load times using a front-end optimization budget doc.</li>
          <li>2. Keeping technical debt to a minimum and removing unused components &amp; dependencies.</li>
          <li>3. Quality assurance by following accessibility, brand, performance, and usability guidelines.</li>
          <li>4. Code reviews were mandatory on every PR to ensure minimum time/space complexities.</li>
        </ul>
      </div>
    </div>
    <div className="intro intro__stretch">
      <p>From 2018 to 2021, the PlayVS website evolved from a simple lead conversion landing page to a massive site architecture (custom & third-party solutions) with hundreds of  documents, ~30 web components and more. This site has supported numerous company initiatives and generated enough leads to earn over 25% of the company’s overall revenue. Being the first employee at PlayVS, I oversaw its production from the start.</p>
      <h1>visit <Link href="https://playvs.com/" target="_blank">playvs.com</Link></h1>
    </div>
  </Layout>
)

export default playvs