import Breadcumbs from "../../components/Breadcumbs/Breadcumbs"
import Card from "../../components/Card/Card"
import styles from "./client.module.css"

const Client = () => {
  return (
    <div className={styles.client}>
        <Breadcumbs pageName={"بيانات العميل"}></Breadcumbs>
        <div className={styles.content}>
            <Card>
                <div className={styles.pairs}>
                    <div className={styles.infoPair}>
                        <h4>اسم العميل</h4>
                        <p>اسم العميل</p>
                    </div>
                    <div className={styles.infoPair}>
                        <h4>المدينة</h4>
                        <p>الرياض</p>
                    </div>
                    <div className={styles.infoPair}>
                        <h4>العنوان</h4>
                        <p>شارع الفردوس، حي الزهور، مدينة السلام، الدولة</p>
                    </div>
                </div>
                <div className={styles.infoTable}>
                    <table cellSpacing={0}>
                        <thead>
                            <th colSpan={4}>
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
                            <th colSpan={4}>
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
                                مرفق
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
                    </table>
                </div>
                <div className={styles.infoTable}>
                    <table cellSpacing={0}>
                        <thead>
                            <th colSpan={5}>
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
                                تفاصيل العقد
                            </td>
                            <td>
                                مرفق
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