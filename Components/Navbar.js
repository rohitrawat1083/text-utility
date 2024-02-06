import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom/cjs/react-router-dom.min';



export default function NavBar(props) {
  
  
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid" style={{color: props.mode==='dark'?'white':'black'}}>
       
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.AboutTitle}</a>
            </li>
            <li className='nav-item'>
            <a className="nav-link" href="/registrationform">{props.RegTitle}</a>
              </li>

          </ul>
          <form className="d-flex" role="search">
            <div className={`"form-check form-switch text-${props.mode}"`}>
              <input className="form-check-input mx-2" type="checkbox" role="switch"  onClick={props.toggleSwitch} id="flexSwitchCheckDefault"/>
                <label className="form-check-label " htmlFor="flexSwitchCheckDefault"  >Enable {props.mode==="light"?"dark":"light"} mode</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutTitle: PropTypes.string.isRequired
}


NavBar.defaultProps = {
  title: 'Set Title Here',
  AboutTitle: 'About us here'
}
