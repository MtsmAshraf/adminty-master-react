import { faFileInvoice, faFileLines, faHouse, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import SidebarLink from './SidebarLink/SidebarLink';
import styles from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <SidebarLink icon={faHouse} linkText={"الرئيسية"} to={"/"}/>
        <SidebarLink icon={faFileInvoice} linkText={"التكيتات"} to={"/invoice-list"}/>
        <SidebarLink icon={faFileLines} linkText={"الصفحة الداخلية"} to={"/invoice"}/>
        <SidebarLink icon={faPlusCircle} linkText={"إدخال البيانات"} to={"/add-bill"}/>
        <SidebarLink icon={faPlusCircle} linkText={"إضافة بيان جمركي"} to={"/add-custom"}/>
      </ul>
    </div>
  )
}

export default Sidebar