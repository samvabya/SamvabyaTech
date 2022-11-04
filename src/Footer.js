import React from 'react'
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Footer() {
  return (
    <div className="xfoot">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/samvabya">Github</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/upcoming">Upcoming</Link>
        </li>
      </ul>
    </div>
  )
}
