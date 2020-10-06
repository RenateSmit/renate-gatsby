import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <Link to="/about/">About</Link>
    <Header headerText="Hoi Gatsby!" nogiets="goedemorgen" />
    <p>Wat een wereld</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
