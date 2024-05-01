import { Link } from "react-router-dom"
import Card from "../../components/Card/Card"
import styles from "./translation.module.css"
import billPdf from "../../assets/files/235-53428896.pdf"
import { useEffect } from "react"

const Translation = () => {
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
            <div className={styles.translationList}>
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