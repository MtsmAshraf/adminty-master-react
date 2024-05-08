import React, { useEffect, useState } from 'react'
import styles from "./bill-details.module.css"
import Card from '../../components/Card/Card'
import billPdf from "../../assets/files/235-53428896.pdf"
import { Link } from 'react-router-dom'
import { faMoneyBills, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BillDetails = () => {
    let [bills, setBills] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const request = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await request.json()
            setBills(data)
            console.log(bills)
        }
        fetchData()
        let additionalBills = document.querySelectorAll("#additional-bills li")
        additionalBills.forEach(li => {
            li.onclick = () => {
                additionalBills.forEach((li) => {
                    li.setAttribute("status", "")
                })
                li.setAttribute("status", "active")
            }
        })
    }, [])
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
                        {
                            bills && bills.map((bill) => {
                                return(
                                    <li key={bill.id}>
                                        <span>
                                            <FontAwesomeIcon icon={faMoneyBills} />
                                        </span>
                                        <div className={styles.text}>
                                            {/* <h4>مصاريف إضافية</h4> */}
                                            <p>
                                                {
                                                    bill.name
                                                }
                                            </p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        {/* <li  status="active">
                            <span>
                                <FontAwesomeIcon icon={faMoneyBills} />
                            </span>
                            <div className={styles.text}>
                                <p>
                                    تفاصيل الفاتورة الإضافية
                                </p>
                            </div>
                        </li> */}
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