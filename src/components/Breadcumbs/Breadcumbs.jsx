import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./breadcumbs.module.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
const Breadcumbs = ({pageName}) => { 
    const location = useLocation();
    let currentLink = '';

    const crumbs = location.pathname.split("/")
    .filter(crumb => crumb !== "") 
    .map(crumb => {
        currentLink += `/` + crumb
        return (
            <div key={crumb}>
                <Link to={currentLink}>{pageName}</Link>
            </div>
        )
    })
  return (
    <div className={styles.breadcumbs}>
        <h3>{pageName}</h3>
        <div>
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
            </Link>
            <span>/</span>
            {crumbs}
        </div>
    </div>
  )
}

export default Breadcumbs