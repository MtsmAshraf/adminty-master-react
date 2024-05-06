import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Breadcumbs from "../../components/Breadcumbs/Breadcumbs"
import Card from "../../components/Card/Card"
import styles from "./client.module.css"
import { faCity, faEye, faFileContract, faMapLocation, faPlus, faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import MainBtn from "../../components/MainBtn/MainBtn.jsx"
const Client = () => {
  return (
    <div className={styles.client}>
        <Breadcumbs pageName={"بيانات العميل"}></Breadcumbs>
        <div className={styles.content}>
            <Card>
                <div className={styles.pairs}>
                    <div className={styles.infoPair}>
                        <span>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <h4>اسم العميل</h4>
                        <p>اسم العميل</p>
                    </div>
                    <div className={styles.infoPair}>
                        <span>
                            <FontAwesomeIcon icon={faCity} />
                        </span>
                        <h4>المدينة</h4>
                        <p>الرياض</p>
                    </div>
                    <div className={styles.infoPair}>
                        <span>
                            <FontAwesomeIcon icon={faMapLocation} />
                        </span>
                        <h4>العنوان</h4>
                        <p>شارع الفردوس، حي الزهور، مدينة السلام، الدولة</p>
                    </div>
                </div>
                <div className={styles.infoTable}>
                    <table cellSpacing={0}>
                        <thead>
                            <th colSpan={4}>
                                <span>
                                    <MainBtn>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </MainBtn>
                                </span>
                                وسائل التواصل
                            </th>
                        </thead>
                        <tr>
                            <td>
                                الاسم
                            </td>
                            <td>
                                المنصب
                            </td>
                            <td>
                                الجوال
                            </td>
                            <td>
                                الإيميل
                            </td>
                        </tr>
                        <tr>
                            <td>
                                اسم العميل
                            </td>
                            <td>
                                منصب العميل
                            </td>
                            <td>
                                9662432412
                            </td>
                            <td>
                                client123@example.com
                            </td>
                        </tr>
                        <tr>
                            <td>
                                اسم العميل
                            </td>
                            <td>
                                منصب العميل
                            </td>
                            <td>
                                9662432412
                            </td>
                            <td>
                                client123@example.com
                            </td>
                        </tr>
                        <tr>
                            <td>
                                -
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                -
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.infoTable}>
                    <table cellSpacing={0}>
                        <thead>
                            <th colSpan={3}>
                                <span>
                                    <MainBtn>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </MainBtn>
                                </span>
                                التفويض
                            </th>
                        </thead>
                        <tr>
                            <td>
                                رقم التفويض
                            </td>
                            <td>
                                تاريخ الانتهاء
                            </td>
                            <td>
                                حالة التفويض
                            </td>
                        </tr>
                        <tr>
                            <td>
                                90816422
                            </td>
                            <td>
                                31 - 12 -2024
                            </td>
                            <td>
                                حالة التفويض
                            </td>
                        </tr>
                        <tr>
                            <td>
                                90816422
                            </td>
                            <td>
                                31 - 12 -2024
                            </td>
                            <td>
                                حالة التفويض
                            </td>
                        </tr>
                        <tr>
                            <td>
                                -
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                -
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.infoTable}>
                    <table cellSpacing={0}>
                        <thead>
                            <th colSpan={4}>
                                <span>
                                    <MainBtn>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </MainBtn>
                                </span>
                                السجل التجاري
                            </th>
                        </thead>
                        <tr>
                            <td>
                                رقم السجل التجاري
                            </td>
                            <td>
                                تاريخ الانتهاء
                            </td>
                            <td>
                                حالة السجل
                            </td>
                            <td>
                                مرفق
                            </td>
                        </tr>
                        <tr>
                            <td>
                                90816422
                            </td>
                            <td>
                                31 - 12 -2024
                            </td>
                            <td>
                                حالة السجل
                            </td>
                            <td>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faEye} />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                90816422
                            </td>
                            <td>
                                31 - 12 -2024
                            </td>
                            <td>
                                حالة السجل
                            </td>
                            <td>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faEye} />
                                </Link>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.infoTable}>
                    <table cellSpacing={0}>
                        <thead>
                            <th colSpan={5}>
                                <span>
                                    <MainBtn>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </MainBtn>
                                </span>
                                العقد
                            </th>
                        </thead>
                        <tr>
                            <td>
                                رقم العقد
                            </td>
                            <td>
                            تاريخ بداية العقد
                            </td>
                            <td>
                                تاريخ انتهاء العقد
                            </td>
                            <td>
                                تفاصيل العقد
                            </td>
                            <td>
                                مرفق
                            </td>
                        </tr>
                        <tr>
                            <td>
                                12085712
                            </td>
                            <td>
                                01 - 01 - 2024
                            </td>
                            <td>
                                31 - 12 - 2024
                            </td>
                            <td>
                                <Link to="/contract">
                                    <FontAwesomeIcon icon={faFileContract} />
                                </Link>
                            </td>
                            <td>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faEye} />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                12085712
                            </td>
                            <td>
                                01 - 01 - 2024
                            </td>
                            <td>
                                31 - 12 - 2024
                            </td>
                            <td>
                                <Link to="/contract">
                                    <FontAwesomeIcon icon={faFileContract} />
                                </Link>
                            </td>
                            <td>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faEye} />
                                </Link>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.infoTable}>
                    <table cellSpacing={0}>
                        <thead>
                            <th colSpan={5}>
                                <span>
                                    <MainBtn>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </MainBtn>
                                </span>
                                قائمة الشحنات
                            </th>
                        </thead>
                        <tr>
                            <td>
                                رقم البوليصة
                            </td>
                            <td>
                                تاريخ البوليصة
                            </td>
                            <td>
                                الحالة
                            </td>
                        </tr>
                        <tr>
                            <td>
                                12085712
                            </td>
                            <td>
                                01 - 01 - 2024
                            </td>
                            <td>
                                حالة البوليصة
                            </td>
                        </tr>
                        <tr>
                            <td>
                                12085712
                            </td>
                            <td>
                                01 - 01 - 2024
                            </td>
                            <td>
                                حالة البوليصة
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.infoTable}>
                    <table cellSpacing={0}>
                        <thead>
                            <th colSpan={5}>
                                <span>
                                    <MainBtn>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </MainBtn>
                                </span>
                                قائمة الفواتير
                            </th>
                        </thead>
                        <tr>
                            <td>
                                رقم الفاتورة
                            </td>
                            <td>
                                تاريخ الفاتورة
                            </td>
                            <td>
                                الحالة
                            </td>
                        </tr>
                        <tr>
                            <td>
                                12085712
                            </td>
                            <td>
                                01 - 01 - 2024
                            </td>
                            <td>
                                حالة الفاتورة
                            </td>
                        </tr>
                        <tr>
                            <td>
                                12085712
                            </td>
                            <td>
                                01 - 01 - 2024
                            </td>
                            <td>
                                حالة الفاتورة
                            </td>
                        </tr>
                    </table>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default Client