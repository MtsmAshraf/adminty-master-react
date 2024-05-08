import React, { useEffect, useState } from 'react'
import styles from "./bill-details.module.css"
import Card from '../../components/Card/Card'
import billPdf from "../../assets/files/235-53428896.pdf"
import { Link } from 'react-router-dom'
import { faMoneyBills, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BillDetails = () => {
    let [bills, setBills] = useState()
    let [billId, setBillId] = useState()
    let [billName, setBillName] = useState()
    let [billPrice, setBillPrice] = useState()
    let [billDetails, setBillDetails] = useState()
    let [disableInputs, setDisableInputs] = useState(false)
    const fetchData = async () => {
        const request = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await request.json()
        setBills(data)
        // setBillId(data[0].id)
        // setBillName(data[0].name)
        // setBillPrice(data[0].name)
        // setBillDetails(data[0].name)
    }
    const fetchSingleData = async (userId) => {
        const request = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const data = await request.json()
        setBillId(data.id)
        setBillName(data.name)
        setBillPrice(data.name)
        setBillDetails(data.name)
        setDisableInputs(true)
    }
    const addAdditionalBill = () => {
        setDisableInputs(false)
        setBillId("")
        setBillName("")
        setBillPrice("")
        setBillDetails("")
    }
    useEffect(() => {
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
                    <h3>تفاصيل الفاتورة</h3>
                    <form action="">
                        <div>
                            <label htmlFor="">رقم الفاتورة</label>
                            <input value={billId} type="number" disabled={disableInputs}/>
                        </div>
                        <div>
                            <label htmlFor="">اسم الفاتورة</label>
                            <input value={billName} type="text" disabled={disableInputs}/>
                        </div>
                        <div>
                            <label htmlFor="">المبلغ</label>
                            <input value={billPrice} type="number" disabled={disableInputs}/>
                        </div>
                        <div>
                            <label htmlFor="">تفاصيل الفاتورة</label>
                            <textarea name="" id="">
                                {billName}
                            </textarea>
                        </div>
                        <div className={styles.btns}>
                            <input type="submit" value="حفظ"/>
                            <input type="reset" value="إلغاء"/>
                        </div>
                    </form>    
                </Card>
                <Card>
                    <div className={styles.header} id="add-additional-bill" onClick={addAdditionalBill}>
                        <span>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                        <h3>مصاريف إضافية</h3>
                    </div>
                    <ul id="additional-bills">
                        {
                            bills && bills.map((bill) => {
                                return(
                                    <li key={bill.id} onClick={() => {fetchSingleData(bill.id)}}>
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