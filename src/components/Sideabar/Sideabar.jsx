import { faBoxesStacked, faFileInvoice, faFileLines, faHouse, faLanguage, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import SidebarLink from './SidebarLink/SidebarLink';
import styles from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux';
import logo from "../../assets/imgs/logoipsum.svg"
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const shown = useSelector((state) => state.sideBar.shown);

  return (
    <div className={shown ? styles.sidebar + " " + styles.shown : styles.sidebar}>
      <div className={styles.logo} >
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul>
        <SidebarLink icon={faHouse} linkText={"الرئيسية"} to={"/"}/>
        <SidebarLink icon={faFileInvoice} linkText={"التكيتات"} to={"/invoice-list"}/>
        <SidebarLink icon={faFileLines} linkText={"الصفحة الداخلية"} to={"/invoice"}/>
        <SidebarLink icon={faPlusCircle} linkText={"إضافة شحنة"} to={"/add-bill"}/>
        <SidebarLink icon={faPlusCircle} linkText={"قائمة الشحنات"} to={"/bills-list"}/>
        <SidebarLink icon={faPlusCircle} linkText={"إضافة بيان جمركي"} to={"/add-custom"}/>
        <SidebarLink icon={faPlusCircle} linkText={"إضافة سال"} to={"/add-sal"}/>
        <SidebarLink icon={faPlusCircle} linkText={"إضافة نقل"} to={"/add-trans"}/>
        <SidebarLink icon={faBoxesStacked} linkText={"تحميل البضاعة"} to={"/add-goods"}/>
        <SidebarLink icon={faFileInvoice} linkText={"تفاصيل الفاتورة"} to={"/bill-details"}/>
        <SidebarLink icon={faPlusCircle} linkText={"فاتورة شراء"} to={"/add-new-bill"}/>
        <SidebarLink icon={faLanguage} linkText={"الترجمة"} to={"/translation"}/>
        <SidebarLink icon={faUser} linkText={"العميل"} to={"/client"}/>
      </ul>
    </div>
  )
}

export default Sidebar