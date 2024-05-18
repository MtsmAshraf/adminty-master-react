import { useState } from "react"
import Breadcumbs from "../../components/Breadcumbs/Breadcumbs"
import Card from "../../components/Card/Card"
import styles from "./bills-list.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const BillsList = () => {
    const [billId, setBillId] = useState(true)
    const [clientName, setClientName] = useState(true)
    const [clienLasttName, setClientLastName] = useState(true)
    const [email, setEmail] = useState(true)

    const [openHideShowCols, setOpenHideShowCols] = useState(false)

    return (
        <div className={styles.billsList}>
            <Breadcumbs pageName={"قائمة الشحنات"}></Breadcumbs>
            <div className={styles.content}>
                <Card>
                    <div className={styles.tableWrapper}>
                        <div className={styles.tableHeader}>
                            <h3>
                                قائمة الشحنات
                            </h3>
                            <div className={styles.hideShowColsWrapper}>
                                <div className={styles.hideShowColsOpener} onClick={() => {setOpenHideShowCols(!openHideShowCols)}}>
                                    <span>الأعمدة</span>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                                <div className={styles.hideShowCols} style={{ display: openHideShowCols ? "flex" : "none"}}>
                                    <div>
                                        <input type="checkbox" onChange={(e) => {console.log(setBillId(e.target.checked))}} checked={billId} name="hide-show-cols" id="bill-id" />
                                        <label htmlFor="bill-id">
                                            رقم البوليصة
                                        </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" onChange={(e) => {console.log(setClientName(e.target.checked))}} checked={clientName} name="hide-show-cols" id="client-name" />
                                        <label htmlFor="client-name">
                                            اسم العميل
                                        </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" onChange={(e) => {console.log(setClientLastName(e.target.checked))}} checked={clienLasttName} name="hide-show-cols" id="client-last-name" />
                                        <label htmlFor="client-last-name">
                                            last name
                                        </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" onChange={(e) => {console.log(setEmail(e.target.checked))}} checked={email} name="hide-show-cols" id="email" />
                                        <label htmlFor="email">
                                            الإيميل
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table cellSpacing={0}>
                            <thead>
                                <th style={{ display:  billId ? "table-cell" : "none"}}>
                                    رقم البوليصة
                                </th>
                                <th style={{ display: clientName ? "table-cell" : "none"}}>
                                    اسم العميل
                                </th>
                                <th style={{ display: clienLasttName ? "table-cell" : "none"}}>
                                    last name
                                </th>
                                <th style={{ display: email ? "table-cell" : "none"}}>
                                    الإيميل
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ display:  billId ? "table-cell" : "none"}}>
                                        789-654987
                                    </td>
                                    <td style={{ display: clientName ? "table-cell" : "none"}}>
                                        اسم العميل
                                    </td>
                                    <td style={{ display: clienLasttName ? "table-cell" : "none"}}>
                                        اسم العميل
                                    </td>
                                    <td style={{ display: email ? "table-cell" : "none"}}>
                                        client312402@example.com
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ display:  billId ? "table-cell" : "none"}}>
                                        789-654987
                                    </td>
                                    <td style={{ display: clientName ? "table-cell" : "none"}}>
                                        اسم العميل
                                    </td>
                                    <td style={{ display: clienLasttName ? "table-cell" : "none"}}>
                                        اسم العميل
                                    </td>
                                    <td style={{ display: email ? "table-cell" : "none"}}>
                                        client312402@example.com
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ display:  billId ? "table-cell" : "none"}}>
                                        789-654987
                                    </td>
                                    <td style={{ display: clientName ? "table-cell" : "none"}}>
                                        اسم العميل
                                    </td>
                                    <td style={{ display: clienLasttName ? "table-cell" : "none"}}>
                                        اسم العميل
                                    </td>
                                    <td style={{ display: email ? "table-cell" : "none"}}>
                                        client312402@example.com
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ display:  billId ? "table-cell" : "none"}}>
                                        789-654987
                                    </td>
                                    <td style={{ display: clientName ? "table-cell" : "none"}}>
                                        اسم العميل
                                    </td>
                                    <td style={{ display: clienLasttName ? "table-cell" : "none"}}>
                                        اسم العميل
                                    </td>
                                    <td style={{ display: email ? "table-cell" : "none"}}>
                                        client312402@example.com
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default BillsList