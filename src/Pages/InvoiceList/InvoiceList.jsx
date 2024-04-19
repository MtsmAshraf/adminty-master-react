import { Link } from "react-router-dom"
import Breadcumbs from "../../components/Breadcumbs/Breadcumbs"
import Card from "../../components/Card/Card"
import styles from "./invoice-list.module.css"
import { useState } from "react"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const InvoiceList = () => {
    let [paidStatus, setPaidStatus] = useState("full")
  return (
    <div className={styles.invoiceList}>
        <Breadcumbs pageName={"التيكتات"} />
        <div className={styles.content}>
            <div className={styles.left}>
                <div className={styles.tickets}>
                    <div className={styles.ticket}>
                        <Card>
                            <h4 class="label label-primary p-t-5 p-b-10">معلومات البوليصة</h4>
                            <div className={styles.ticketContent} dir="rtl">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <ul className={styles.ticketList }>
                                            <li className={styles.important}>
                                                <h5>
                                                    رقم البوليصة: 
                                                </h5>
                                                <span>235-53428896</span>
                                            </li>
                                            <li>
                                                <h5>
                                                    عدد الطرود: 
                                                </h5>
                                                <span>25</span>
                                            </li>
                                            <li>
                                                <h5>
                                                    المنفذ: 
                                                </h5>
                                                <span>اسم المنفذ</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.progress}>
                                <span  className={styles.progressPercentage}>
                                    <span></span>
                                    60%
                                </span>
                                <div className={styles.progressBar} data-progress="60%"></div>
                            </div>
                            <div className={styles.ticketFooter}>
                                <p className={styles.due}>
                                    <span> Due : </span>
                                    <strong class="label label-primary">23 hours</strong>
                                </p>
                                <Link className={styles.eyeIcon} to="/invoice">
                                    <FontAwesomeIcon icon={faEye} />
                                </Link>
                            </div>
                        </Card>
                    </div>
                    <div className={styles.ticket}>
                        <Card>
                            <h4 class="label label-primary p-t-5 p-b-10">البيان الجمركي</h4>
                            <div className={styles.ticketContent} dir="rtl">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <ul className={styles.ticketList}>
                                            <li className={styles.important}>
                                                <h5>
                                                    رقم البيان: 
                                                </h5>
                                                <span>235-53428896</span>
                                            </li>
                                            <li>
                                                <h5>
                                                    التاريخ: 
                                                </h5>
                                                <span>25-10-2024</span>
                                            </li>
                                            <li>
                                                <h5>
                                                    المبلغ الإجمالي: 
                                                </h5>
                                                <span>5000</span>
                                                <span className={styles.currency}>SAR </span>
                                            </li>
                                            {/* <li>
                                                <h5>
                                                    حالة السداد: 
                                                </h5>
                                                <span className={styles.paidStatus} style={{backgroundImage: paidStatus === "full" ? "var(--success-gradient)" : paidStatus === "partially" ? "var(--primary-gradient)" :"var(--danger-gradient)"}}>
                                                    {paidStatus === "full" && "مدفوع"}
                                                    {paidStatus === "partially" && "مدفوع جزئي"}
                                                    {paidStatus === "unpaid" && "غير مدفوع"}
                                                </span>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.progress}>
                                <span  className={styles.progressPercentage}>
                                    <span></span>
                                    60%
                                </span>
                                <div className={styles.progressBar} data-progress="60%"></div>
                            </div>
                            <div className={styles.ticketFooter}>
                                {/* <p className={styles.due}>
                                    <span> Due : </span>
                                    <strong class="label label-primary">23 hours</strong>
                                </p> */}
                                <Link className={styles.eyeIcon} to="/invoice">
                                    <FontAwesomeIcon icon={faEye} />
                                </Link>
                            </div>
                        </Card>
                    </div>
                    <div className={styles.ticket}>
                        <Card>
                            <h4 class="label label-primary p-t-5 p-b-10">فاتورة الشراء</h4>
                            <div className={styles.ticketContent} dir="rtl">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <ul className={styles.ticketList}>
                                            <li>
                                                <h5>
                                                    المبلغ الإجمالي: 
                                                </h5>
                                                <span>5000</span>
                                                <span className={styles.currency}>SAR </span>
                                            </li>
                                            <li>
                                                <h5>
                                                    عدد الفواتير: 
                                                </h5>
                                                <span>6</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.ticketFooter}>
                                <div class="task-list-table">
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className={styles.ticket}>
                        <Card>
                            <h4 class="label label-primary p-t-5 p-b-10">سال</h4>
                            <div className={styles.ticketContent} dir="rtl">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <ul className={styles.ticketList}>
                                            <li>
                                                <h5>
                                                    المبلغ الإجمالي: 
                                                </h5>
                                                <span>5000</span>
                                                <span className={styles.currency}>SAR </span>
                                            </li>
                                            <li>
                                                <h5>
                                                    حالة السداد: 
                                                </h5>
                                                <span className={styles.paidStatus} style={{backgroundImage: paidStatus === "full" ? "var(--success-gradient)" : paidStatus === "partially" ? "var(--primary-gradient)" :"var(--danger-gradient)"}}>
                                                    {paidStatus === "full" && "مدفوع"}
                                                    {paidStatus === "partially" && "مدفوع جزئي"}
                                                    {paidStatus === "unpaid" && "غير مدفوع"}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.ticketFooter}>
                                
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className={styles.summary}>
                <Card>
                    Summary
                </Card>
            </div>
      </div>
    </div>
  )
}

export default InvoiceList