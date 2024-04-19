import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./header.module.css"
import { faAngleDown, faBell, faComment, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"
import userPic from "../../assets/imgs/user.png"
const Header = () => {
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
            <FontAwesomeIcon icon={faBell} />
            <div>5</div>
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            <div>15</div>
          </span>
        </div>
        <div className={styles.personalInfo}>
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