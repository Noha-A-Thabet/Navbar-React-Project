import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  const togggleLinks = () => {
    setShowLinks(!showLinks);
  }


  return (
    <nav>
      <div className='nav-center'>
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button onClick={togggleLinks}>
            <FaBars />
          </button>
        </div>
        {/* links */}
        <div className={`${showLinks ? "links-container show-container" : "links-container"}`} ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((linkItem) => {
              const { id, text, url } = linkItem;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        {/* social icons */}
        <ul className="social-icons">
          {social.map((socialItem) => {
            const { id, icon, url } = socialItem;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav >
  )
}

export default Navbar
