import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
        <div style={{textAlign: 'center', marginBottom: 10}}>
            Made with 💖 by {" "}
            <Link to="https://gautampatel-28.github.io/React_portfolio/" target='__blank'
            style={{cursor: "pointer"}}>Gautam Patel</Link>
        </div> 
    </>
  )
}

export default Footer