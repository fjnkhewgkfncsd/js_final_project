"use client"

import { useState, useEffect, useRef } from "react" // Added useEffect and useRef
import { Link } from "react-router-dom"
import UserIcon from "../assets/Icons/user-circle-svgrepo-com.svg"
import CartIcon from "../assets/Icons/cart-check-svgrepo-com.svg"
import Favorite from "../assets/Icons/favorite-svgrepo-com.svg"
import "../Styles/Header.css"
import pic1 from "../assets/header/bestpic.jpg"
import "../Styles/login-modal.css"
import pic2 from "../assets/Pictures/pngtree-fresh-apple-fruit-red-png-image_10203073.png"
import pic4 from "../assets/Pictures/7123025_logo_google_g_icon.png"
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const modalRef = useRef(null) // Add ref for the modal container
  let timeoutId = null

  const handleMouseEnter = () => {
    clearTimeout(timeoutId)
    setShowDropdown(true)
  }

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowDropdown(false)
    }, 200) // 300ms delay before hiding the dropdown
  }

  const handleClickdropdown = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal)
  }

  // Close modal when clicking outside
  const handleOverlayClick = (e) => {
    // Only close if clicking the overlay itself, not the modal content
    if (e.target.classList.contains("modal-overlay")) {
      setShowLoginModal(false)
    }
  }

  // Add scroll event listener to close modal when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (showLoginModal) {
        setShowLoginModal(false)
      }
    }

    // Add event listener when modal is open
    if (showLoginModal) {
      window.addEventListener("scroll", handleScroll)
    }

    // Clean up event listener when component unmounts or modal closes
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showLoginModal])

  return (
    <>
      <header>
        <Link to="/">
          <p className="Logo">KhmerKits</p>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/Shop">SHOP</Link>
            </li>
            <li className="collections-menu">
              <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                COLLECTIONS
              </Link>
              {showDropdown && (
                <div className="dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="dropdown-content">
                    <img src={pic1 || "/placeholder.svg"} alt="kon papa" className="pic-header" />
                    <div className="dropdown-column">
                      <h3>League</h3>
                      <ul>
                        <li>
                          <Link to="/collections/premier-league" onClick={handleClickdropdown}>
                            Premier League
                          </Link>
                        </li>
                        <li>
                          <Link to="/collections/la-liga" onClick={handleClickdropdown}>
                            La Liga
                          </Link>
                        </li>
                        <li>
                          <Link to="/collections/seria-a" onClick={handleClickdropdown}>
                            Seria A
                          </Link>
                        </li>
                        <li>
                          <Link to="/collections/bundesliga" onClick={handleClickdropdown}>
                            Bundesliga
                          </Link>
                        </li>
                        <li>
                          <Link to="/collections/others-league" onClick={handleClickdropdown}>
                            Others
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <span className="span"></span>
                    <div className="dropdown-column">
                      <h3>Retro</h3>
                      <ul>
                        <li>
                          <Link to="/collections/ac-milan">AC Milan</Link>
                        </li>
                        <li>
                          <Link to="/collections/real-madrid">Real MAdrid</Link>
                        </li>
                        <li>
                          <Link to="/collections/barcelona">Barcelona</Link>
                        </li>
                        <li>
                          <Link to="/collections/liverpool">Liverpool</Link>
                        </li>
                        <li>
                          <Link to="/collections/manchester-united">Manchester United</Link>
                        </li>
                        <li>
                          <Link to="/collections/juventus">Juventus</Link>
                        </li>
                        <li>
                          <Link to="/collections/others-retro">Others</Link>
                        </li>
                      </ul>
                    </div>
                    <span className="span"></span>
                    <div className="dropdown-column">
                      <h3>National Team</h3>
                      <ul>
                        <li>
                          <Link to="/collections/argentina">Argentina</Link>
                        </li>
                        <li>
                          <Link to="/collections/france">France</Link>
                        </li>
                        <li>
                          <Link to="/collections/portugal">Portugal</Link>
                        </li>
                        <li>
                          <Link to="/collections/germany">Germany</Link>
                        </li>
                        <li>
                          <Link to="/collections/spain">Spain</Link>
                        </li>
                        <li>
                          <Link to="/collections/brazil">Brazil</Link>
                        </li>
                        <li>
                          <Link to="/collections/japan">Japan</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/About">ABOUT</Link>
            </li>
          </ul>
        </nav>
        <div className="right_panel">
          <img
            src={UserIcon || "/placeholder.svg"}
            alt="Account"
            className="Icon"
            onClick={toggleLoginModal}
            style={{ cursor: "pointer" }}
          />
          <Link to="/Shopping_cart">
            <img src={CartIcon || "/placeholder.svg"} alt="Add to Cart" className="Icon" />
          </Link>
          <Link to="/Favorite">
            <img src={Favorite || "/placeholder.svg"} alt="Favorite" className="Icon" />
          </Link>
        </div>
      </header>

      {showLoginModal && (
        <div
          className="modal-overlay"
          onClick={handleOverlayClick} // Add click handler to close when clicking outside
        >
          <div
            className="modal-container"
            ref={modalRef} // Add ref to the modal container
          >
            <h2 className="modal-title">Login</h2>

            <form className="modal-form">
              <div>
                <input type="email" placeholder="Email" className="form-input" required />
              </div>

              <div>
                <input type="password" placeholder="Password" className="form-input" required />
              </div>

              <div className="forgot-password-container">
                <a href="#" className="forgot-password-link">
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className="login-button">
                Log in
              </button>
            </form>

            <div className="signup-container">
              <p className="signup-text">
                Don't have an account?
                <a href="#" className="signup-link">
                  Sign up
                </a>
              </p>
            </div>

            <div className="social-buttons-container">
              <button className="apple-button">
                <img src={pic2} alt="" />
                <span>Log in with Apple</span>
              </button>

              <button className="google-button">
                <img src={pic4} alt="" />
                <span>Login with Google</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header

