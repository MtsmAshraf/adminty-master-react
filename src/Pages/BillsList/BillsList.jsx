import { useEffect, useState } from "react"
import Breadcumbs from "../../components/Breadcumbs/Breadcumbs"
import Card from "../../components/Card/Card"
import styles from "./bills-list.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faChevronDown, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const BillsList = () => {

    const [openHideShowCols, setOpenHideShowCols] = useState(false)
    const [tableData, setTableData] = useState([
        { 
            id: 1,
            billId: "789-456432",
            date: "20-03-2024",
            name: 'John Doe',
            outlet: "المنفذ الأول",
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
        },
        { 
            id: 5,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        },
        { 
            id: 6,
            billId: "301-456432",
            date: "20-03-2024",
            name: 'Emily Brown',
            outlet: "اسم المنفذ",
            status: "حالة الشحنة",
            trackingStatus: "حالة التتبع"
        }
    ])

    const [shownData, setShownData] = useState([])

    const [fromRow, setFromRow] = useState(1)
    const [toRow, setToRow] = useState(1)
    const [totalNoOfRows, setTotalNoOfRows] = useState(1)
    const [shownNoOfRows, setShownNoOfRows] = useState(1)

    useEffect(() => {
        const checkboxInputs = document.querySelectorAll("input[type='checkbox']")
        checkboxInputs.forEach((input, index) => {
            input.checked = true;
            input.onchange = (e) => {
                document.querySelectorAll(`table thead th:nth-child(${index + 1})`).forEach((th) => {
                    th.style.display = e.target.checked ? "table-cell" : "none"
                })
                document.querySelectorAll(`table tr td:nth-child(${index + 1})`).forEach((td) => {
                    td.style.display = e.target.checked ? "table-cell" : "none"
                })
            }
        })
        setShownData(tableData)

        const paginationBtns = document.querySelectorAll("#table-footer div:nth-child(2) button:not([id])")
        paginationBtns.forEach((btn) => {
            btn.onclick = () => {
                paginationBtns.forEach((btn) => {
                    btn.setAttribute("status","")
                })
                btn.setAttribute("status","active")
            }
        })
    }, [])
    
    useEffect(() => {
        setToRow(document.querySelectorAll("table tr").length)
        setTotalNoOfRows(document.querySelectorAll("table tr").length)
        setShownNoOfRows(document.querySelector("select").value)
    })

    const handleSearch = (e) => {
        let searchItem = e.target.value;
        if(searchItem !== ""){
            let filteredData = tableData.filter((item) => {
                return item.name.toLowerCase().includes(searchItem.toLowerCase()) || item.outlet.toLowerCase().includes(searchItem.toLowerCase()) || item.billId.includes(searchItem.toString());
            })
            setShownData(filteredData)
        }else if(searchItem === ""){
            setShownData(tableData)
        }
    }

    const handleNoOfRows = (e) => {
        setToRow(e.target.value)
        setShownNoOfRows(e.target.value)
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
                                    shownData.length > 0 ? shownData.map((item,index) => {
                                        return(
                                            <tr key={index} style={{ display: index >= (parseInt(fromRow) + parseInt(shownNoOfRows)  - 1) ? "none" : "table-row"}}>
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
                                    }) : <tr><td colSpan={6}>No Matches</td></tr>
                                }
                            </tbody>
                        </table>
                        <div id="table-footer" className={styles.tableFooter}>
                            <div>
                                <p>
                                    Showing 
                                    <span> {fromRow} </span> 
                                    to 
                                    <span> {parseInt(fromRow) + parseInt(shownNoOfRows)  - 1} </span> 
                                    of 
                                    <span> {totalNoOfRows} </span> 
                                    entries
                                </p>
                                <select onChange={(e) => {handleNoOfRows(e)}} name="" id="">
                                    <option 
                                        value={totalNoOfRows >= 5 ? 5 : totalNoOfRows}>
                                        {totalNoOfRows >= 5 ? 5 : totalNoOfRows}
                                    </option>
                                    <option value="15">15</option>
                                    <option value="25">25</option>
                                    <option 
                                        style={{ display: totalNoOfRows > 25 ? "inline" : "none" }}
                                        value={totalNoOfRows}>
                                        {totalNoOfRows}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <button id="right-arrow-btn">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                                <button status="active">
                                    1
                                </button>
                                <button>
                                    2
                                </button>
                                <button>
                                    3
                                </button>
                                <button id="left-arrow-btn">
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default BillsList