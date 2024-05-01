import { Link } from "react-router-dom"
import Card from "../../components/Card/Card"
import styles from "./translation.module.css"
import billPdf from "../../assets/files/235-53428896.pdf"
import { useEffect, useState } from "react"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Translation = () => {
    const [openList, setOpenList] = useState(false) 
    useEffect(() => {
        const assetsToggleListLis = document.querySelectorAll("#assets-toggle-list li");
        const assets = document.querySelectorAll("#assets > div")
        assetsToggleListLis.forEach((li, index) => {
            li.onclick = () => {
                assetsToggleListLis.forEach((li) => {
                    li.setAttribute("status","")
                })
                li.setAttribute("status","active")
                assets.forEach(asset => {
                    asset.style.display = "none"
                })
                assets[index].style.display = "block"
            }
        }) 
    })
  return (
    <div className={styles.translation}>
        <Card>
            <div className={styles.opener} onClick={() => {setOpenList(!openList)}}>
                <span style={{ display: openList ? "none" : "block" }}>
                    قائمة البوالص
                </span>
                <FontAwesomeIcon icon={faChevronLeft} style={{ transform: `rotate(${openList ? "180deg" : "0deg"})` }}/>
            </div>
            <div className={openList ? styles.translationList + " " + styles.opened : styles.translationList}>
                <h3>
                    قائمة البوالص
                </h3>
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
                            الحالة
                        </th>
                    </thead>
                    <tr>
                        <td>
                            312-31212412
                        </td>
                        <td>
                            20 - 03 -2024
                        </td>
                        <td>
                            اسم العميل
                            اسم العميل
                        </td>
                        <td>
                            تم
                        </td>
                    </tr>
                    <tr>
                        <td>
                            312-31212412
                        </td>
                        <td>
                            20 - 03 -2024
                        </td>
                        <td>
                            اسم العميل
                        </td>
                        <td>
                            تم
                        </td>
                    </tr>
                    <tr>
                        <td>
                            312-31212412
                        </td>
                        <td>
                            20 - 03 -2024
                        </td>
                        <td>
                            اسم العميل
                        </td>
                        <td>
                            تم
                        </td>
                    </tr>
                    <tr>
                        <td>
                            312-31212412
                        </td>
                        <td>
                            20 - 03 -2024
                        </td>
                        <td>
                            اسم العميل
                        </td>
                        <td>
                            تم
                        </td>
                    </tr>
                </table>
            </div>
        </Card>
        <Card>
            <div className={styles.translationStaticInfo}>
                <table cellSpacing={0}>
                    <thead>
                        <th colSpan={5}>
                            معلومات البوليصة
                        </th>
                    </thead>
                    <tr className={styles.impRow}>
                        <td colSpan={1}>اسم العميل</td>
                        <td colSpan={2}>رقم البوليصة</td>
                        <td colSpan={1}>تاريخها</td>
                    </tr>
                    <tr>
                        <td colSpan={1}>اسم العميل</td>
                        <td colSpan={2}>123-897654</td>
                        <td colSpan={1}>12 - 2 - 2024</td>
                    </tr>
                    <thead>
                        <th colSpan={5}>
                            معلومات الشركة المصدرة
                        </th>
                    </thead>
                    <tr className={styles.impRow}>
                        <td>شهادة مواصفات رقم</td>
                        <td>تاريخها</td>
                        <td>اسم الشركة</td>
                        <td>عنوانها</td>
                    </tr>
                    <tr>
                        <td>123-897654</td>
                        <td>12 - 2 - 2024</td>
                        <td>PHILIPS</td>
                        <td>أمريكا</td>
                    </tr>
                </table>
                <table cellSpacing={0}>
                    <thead>
                        <th colSpan={5}>
                            معلومات الفاتورة
                        </th>
                    </thead>
                    <tr className={styles.impRow}>
                        <td colSpan={2}>نوع الفاتورة</td>
                        <td>عدد الطرود</td>
                        <td>الوزن</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>سى اند اف	</td>
                        <td>122</td>
                        <td>214</td>
                    </tr>
                    <tr className={styles.impRow}>
                        <td>الشحن بالفاتورة</td>
                        <td>تأمين</td>
                        <td>رمز العملة</td>
                        <td>مصاريف أخرى</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr className={styles.impRow}>
                        <td>الشحن بالبوليصة</td>
                        <td>رمز العملة</td>
                        <td>إجمالي الفاتورة</td>
                        <td>رمز العملة</td>
                    </tr>
                    <tr>
                        <td>12354</td>
                        <td>-</td>
                        <td>12354</td>
                        <td>410</td>
                    </tr>
                </table>
            </div>
        </Card>
        <Card>
            <div className={styles.translationProcess}>
                <div className={styles.processHeading}>
                    <h4>رقم البوليصة</h4>
                    <span>312-41212412</span>
                </div>
                <div className={styles.processContent}>
                    <div className={styles.translatedSide}>
                        <h3>الترجمة</h3>
                    </div>
                    <div className={styles.assetsSide}>
                        <h3>المرفقات</h3>
                        <ul id="assets-toggle-list">
                            <li status="active">
                                البوليصة
                            </li>
                            <li>
                                البيان الجمركي
                            </li>
                            <li>
                                الفاتورة
                            </li>
                        </ul>
                        <div className={styles.assets} id="assets">
                            <div className={styles.asset}>
                                <iframe src={billPdf}></iframe>
                            </div>                           
                            <div className={styles.asset}>
                                <iframe src={billPdf}></iframe>
                            </div>                           
                            <div className={styles.asset}>
                                <iframe src={billPdf}></iframe>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Translation