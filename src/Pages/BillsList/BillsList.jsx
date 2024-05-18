import { useEffect, useState } from "react"
import Breadcumbs from "../../components/Breadcumbs/Breadcumbs"
import Card from "../../components/Card/Card"
import styles from "./bills-list.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const BillsList = () => {
    // const [billId, setBillId] = useState(true)
    // const [clientName, setClientName] = useState(true)
    // const [clienLasttName, setClientLastName] = useState(true)
    // const [email, setEmail] = useState(true)

    const [openHideShowCols, setOpenHideShowCols] = useState(false)

    const [tableData, setTableData] = useState([
        { 
            id: 1,
            billId: "789-456432",
            date: "20-03-2024",
            name: 'John Doe',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 2,
            billId: "123-456432",
            date: "20-03-2024",
            name: 'Jane Smith',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 3,
            billId: "546-456432",
            date: "20-03-2024",
            name: 'Sam Green',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 4,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        }
    ])

    const [shownData, setShownData] = useState([])

    useEffect(() => {
        const checkboxInputs = document.querySelectorAll("input[type='checkbox']")
        checkboxInputs.forEach((input, index) => {
            input.checked = true;
            input.onchange = (e) => {
                console.log(e.target.checked)
                console.log(document.querySelectorAll(`table tr td:nth-child(${index + 1})`))
                document.querySelectorAll(`table thead th:nth-child(${index + 1})`).forEach((th) => {
                    th.style.display = e.target.checked ? "table-cell" : "none"
                })
                document.querySelectorAll(`table tr td:nth-child(${index + 1})`).forEach((td) => {
                    td.style.display = e.target.checked ? "table-cell" : "none"
                })
            }
        })

        setShownData(tableData)
    }, [])

    const handleSearch = (e) => {
        let searchItem = e.target.value;
        if(searchItem !== ""){
            let filteredData = tableData.filter((item) => {
                return item.name.toLowerCase().includes(searchItem.toLowerCase());
            })
            setShownData(filteredData)
        }else if(searchItem === ""){
            setShownData(tableData)
        }
    }

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
                            <div className={styles.tableSettings}>
                                <div className={styles.hideShowColsWrapper}>
                                    <div className={styles.hideShowColsOpener} onClick={() => {setOpenHideShowCols(!openHideShowCols)}}>
                                        <span>الأعمدة</span>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                    <div className={styles.hideShowCols} style={{ display: openHideShowCols ? "flex" : "none"}}>
                                        <div>
                                            <input type="checkbox" name="hide-show-cols" id="bill-id" />
                                            <label htmlFor="bill-id">
                                                رقم البوليصة
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hide-show-cols" id="client-last-name" />
                                            <label htmlFor="client-last-name">
                                                التاريخ
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hide-show-cols" id="client-name" />
                                            <label htmlFor="client-name">
                                                اسم العميل
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hide-show-cols" id="email" />
                                            <label htmlFor="email">
                                                المنفذ
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hide-show-cols" id="email" />
                                            <label htmlFor="email">
                                                حالة الشحنة
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hide-show-cols" id="email" />
                                            <label htmlFor="email">
                                                حالة التتبع
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.tableSearch}>
                                    <input type="search" placeholder="Search" onChange={(e) => {handleSearch(e)}}/>
                                </div>
                            </div>
                        </div>
                        <table cellSpacing={0}>
                            <thead>
                                <th>
                                    رقم البوليصة
                                </th>
                                <th>
                                    التاريخ
                                </th>
                                <th>
                                    اسم العميل
                                </th>
                                <th>
                                    المنفذ
                                </th>
                                <th>
                                    حالة الشحنة
                                </th>
                                <th>
                                    حالة التتبع
                                </th>
                            </thead>
                            <tbody>
                                {
                                    shownData.length > 0 ? shownData.map((item) => {
                                        return(
                                            <tr key={item.id}>
                                                <td>
                                                    {item.billId}
                                                </td>
                                                <td>
                                                    {item.date}
                                                </td>
                                                <td>
                                                    {item.name}
                                                </td>
                                                <td>
                                                    {item.outlet}
                                                </td>
                                                <td>
                                                    {item.status}
                                                </td>
                                                <td>
                                                    {item.trackingStatus}
                                                </td>
                                            </tr>
                                        )
                                    }) : <tr><td colSpan={4}>No Matches</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default BillsList