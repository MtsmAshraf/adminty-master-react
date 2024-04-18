import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./sidebar-link.module.css"
import { NavLink } from "react-router-dom"
const SidebarLink = ({icon, linkText, to}) => {
  return (
   <NavLink className={styles.sidebarLink} to={to}>
            <span>
                <FontAwesomeIcon icon={icon}/>
            </span>
            <p>
                {linkText}
            </p>
   </NavLink>
  )
}

export default SidebarLink