import React, { useEffect } from 'react'
import styles from "./bill-details.module.css"
import Card from '../../components/Card/Card'
import billPdf from "../../assets/files/235-53428896.pdf"
import { Link } from 'react-router-dom'
import { faMoneyBills, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BillDetails = () => {
    useEffect(() => {
        let additionalBills = document.querySelectorAll("#additional-bills li")
        additionalBills.forEach(li => {
            li.onclick = () => {
                additionalBills.forEach((li) => {
                    li.setAttribute("status", "")
                })
                li.setAttribute("status", "active")
            }
        })
    },[])
    return (
        <div className={styles.billDetails}>
            <div className={styles.additionalBills}>
                <Card>
                    <form action="">
                    </form>    
                </Card>
                <Card>
                    <div className={styles.header}>
                        <span>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                        <h3>مصاريف إضافية</h3>
                    </div>
                    <ul id="additional-bills">
                        <li  status="active">
                            <span>
                                <FontAwesomeIcon icon={faMoneyBills} />
                            </span>
                            <div className={styles.text}>
                                {/* <h4>مصاريف إضافية</h4> */}
                                <p>
                                    تفاصيل الفاتورة الإضافية
                                </p>
                            </div>
                        </li>
                        <li >
                            <span>
                                <FontAwesomeIcon icon={faMoneyBills} />
                            </span>
                            <div className={styles.text}>
                                {/* <h4>مصاريف إضافية</h4> */}
                                <p>
                                    تفاصيل الفاتورة الإضافية
                                </p>
                            </div>
                        </li>
                        <li >
                            <span>
                                <FontAwesomeIcon icon={faMoneyBills} />
                            </span>
                            <div className={styles.text}>
                                {/* <h4>مصاريف إضافية</h4> */}
                                <p>
                                    تفاصيل الفاتورة الإضافية
                                </p>
                            </div>
                        </li>
                        <li >
                            <span>
                                <FontAwesomeIcon icon={faMoneyBills} />
                            </span>
                            <div className={styles.text}>
                                {/* <h4>مصاريف إضافية</h4> */}
                                <p>
                                    تفاصيل الفاتورة الإضافية
                                </p>
                            </div>
                        </li>
                    </ul>
                </Card>
                
            </div>
            <Card>
                <iframe src={billPdf}></iframe>
            </Card>
            <Link className={styles.goBack} to="/invoice-list">
                back
            </Link>
        </div>
  )
}

export default BillDetails