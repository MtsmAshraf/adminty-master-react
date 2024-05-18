import Breadcumbs from "../../components/Breadcumbs/Breadcumbs"
import Card from "../../components/Card/Card"
import styles from "./bills-list.module.css"

const BillsList = () => {
    return (
        <div className={styles.billsList}>
            <Breadcumbs pageName={"قائمة الشحنات"}></Breadcumbs>
            <div className={styles.content}>
                <Card>
                    <h3>
                        قائمة الشحنات
                    </h3>
                    <div className={styles.tableWrapper}>
                        <table cellSpacing={0}>
                            <thead>
                                <th>
                                    رقم البوليصة
                                </th>
                                <th>
                                    اسم العميل
                                </th>
                                <th>
                                    last name
                                </th>
                                <th>
                                    الإيميل
                                </th>
                            </thead>
                            <tr>
                                <td>
                                    789-654987
                                </td>
                                <td>
                                    اسم العميل
                                </td>
                                <td>
                                    اسم العميل
                                </td>
                                <td>
                                    client312402@example.com
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    789-654987
                                </td>
                                <td>
                                    اسم العميل
                                </td>
                                <td>
                                    اسم العميل
                                </td>
                                <td>
                                    client312402@example.com
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    789-654987
                                </td>
                                <td>
                                    اسم العميل
                                </td>
                                <td>
                                    اسم العميل
                                </td>
                                <td>
                                    client312402@example.com
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    789-654987
                                </td>
                                <td>
                                    اسم العميل
                                </td>
                                <td>
                                    اسم العميل
                                </td>
                                <td>
                                    client312402@example.com
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    789-654987
                                </td>
                                <td>
                                    اسم العميل
                                </td>
                                <td>
                                    اسم العميل
                                </td>
                                <td>
                                    client312402@example.com
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    789-654987
                                </td>
                                <td>
                                    اسم العميل
                                </td>
                                <td>
                                    اسم العميل
                                </td>
                                <td>
                                    client312402@example.com
                                </td>
                            </tr>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default BillsList