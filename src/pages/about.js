import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Header headerText="Over Gatsby" nogiets="en nog iets" />
    <p>Very react</p>
    <img src="https://source.unsplash.com/random/400x400" alt="" />
  </div>
)
