import React from 'react'
import './index.css';
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid position-relative">
          <Link className="navbar-brand" to="/">
          <img src="https://i.postimg.cc/J4dvc8XF/stlogo.png" alt="ST" width="30" height="30"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Projects
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="https://mega.nz/folder/8YQxwaJJ#nRGzslKtBO9Kh6o5asvnHA">Lightbook</a></li>
                  <li><a className="dropdown-item" href="https://mega.nz/folder/NNpVFJ7D#7LGncm9-8dh_jCAHQtUphw">Text Router</a></li>
                  <li><a className="dropdown-item" href="https://mega.nz/folder/hZYwDaKQ#pPoKpPXddELI7aEZGohBPg">Expense AI</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
