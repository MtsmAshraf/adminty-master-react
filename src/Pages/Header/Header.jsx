import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./header.module.css"
import { faAngleDown, faBell, faComment, faEnvelope, faGear, faLock, faMagnifyingGlass, faRightFromBracket, faUser, faXmark } from "@fortawesome/free-solid-svg-icons"
import userPic from "../../assets/imgs/user.png"
import { useState } from "react"
import { Link } from "react-router-dom"
const Header = () => {
  let [showNotifications, setShowNotifications] = useState(false)
  let [showPersonalOptions, setShowPersonalOptions] = useState(false)
  let toggleNotifications = () => {
    setShowNotifications(!showNotifications)
    setShowPersonalOptions(false)
  }
  let togglepersonalOptions = () => {
    setShowPersonalOptions(!showPersonalOptions)
    setShowNotifications(false)
  }
  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <span className={styles.openSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input type="search" name="" id="" />
      </div>
      <div className={styles.right}>
        <div className={styles.icons}>
          <span>
            <FontAwesomeIcon icon={faBell} onClick={() => {toggleNotifications()}}/>
            <span onClick={() => {toggleNotifications()}}>5</span>
            <div className={showNotifications ? styles.notifications + " " + styles.shown : styles.notifications}>
              <div className={styles.arrow}></div>
              <h4>Notifications</h4>
              <ul>
                <li>
                  <div className={styles.img}>
                    <img src={userPic} alt="" />
                  </div>
                  <div className={styles.text}>
                    <h5>John Doe</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuer elit.</p>
                    <h6>30 minutes ago</h6>
                  </div>
                </li>
                <li>
                  <div className={styles.img}>
                    <img src={userPic} alt="" />
                  </div>
                  <div className={styles.text}>
                    <h5>John Doe</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuer elit.</p>
                    <h6>30 minutes ago</h6>
                  </div>
                </li>
                <li>
                  <div className={styles.img}>
                    <img src={userPic} alt="" />
                  </div>
                  <div className={styles.text}>
                    <h5>John Doe</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuer elit.</p>
                    <h6>30 minutes ago</h6>
                  </div>
                </li>
                <li>
                  <div className={styles.img}>
                    <img src={userPic} alt="" />
                  </div>
                  <div className={styles.text}>
                    <h5>John Doe</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuer elit.</p>
                    <h6>30 minutes ago</h6>
                  </div>
                </li>
              </ul>
            </div>
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            <span>15</span>
          </span>
        </div>
        <div className={showPersonalOptions ? styles.personalInfo + " " + styles.shown : styles.personalInfo} onClick={() => {togglepersonalOptions()}}>
          <div className={styles.personalOptions}>
          <div className={styles.arrow}></div>
            <ul>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faGear} />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                <FontAwesomeIcon icon={faEnvelope} />
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faLock} />
                  <span>Lock Screen</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.img}>
            <img src={userPic} alt="" />
          </div>
          <p>John Doe</p>
          <span>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header