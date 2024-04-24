import { faBoxesStacked, faFileInvoice, faFileLines, faHouse, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import SidebarLink from './SidebarLink/SidebarLink';
import styles from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <SidebarLink icon={faHouse} linkText={"الرئيسية"} to={"/"}/>
        <SidebarLink icon={faFileInvoice} linkText={"التكيتات"} to={"/invoice-list"}/>
        <SidebarLink icon={faFileLines} linkText={"الصفحة الداخلية"} to={"/invoice"}/>
        <SidebarLink icon={faPlusCircle} linkText={"إضافة شحنة"} to={"/add-bill"}/>
        <SidebarLink icon={faPlusCircle} linkText={"إضافة بيان جمركي"} to={"/add-custom"}/>
        <SidebarLink icon={faPlusCircle} linkText={"إضافة سال"} to={"/add-sal"}/>
        <SidebarLink icon={faPlusCircle} linkText={"إضافة نقل"} to={"/add-trans"}/>
        <SidebarLink icon={faBoxesStacked} linkText={"تحميل البضاعة"} to={"/add-goods"}/>
        <SidebarLink icon={faFileInvoice} linkText={"تفاصيل الفاتورة"} to={"/bill-details"}/>
        <SidebarLink icon={faPlusCircle} linkText={"فاتورة شراء"} to={"/add-new-bill"}/>
      </ul>
    </div>
  )
}

export default Sidebar