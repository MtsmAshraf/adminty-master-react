import Breadcumbs from "../../components/Breadcumbs/Breadcumbs"
import Card from "../../components/Card/Card"
import styles from "./bills-list.module.css"

const BillsList = () => {
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
                            <div>
                                <input type="checkbox" name="hide-show-cols" id="bill-id" />
                                <label htmlFor="">
                                    رقم البوليصة
                                </label>
                                <input type="checkbox" name="hide-show-cols" id="client-name" />
                                <label htmlFor="">
                                    اسم العميل
                                </label>
                                <input type="checkbox" name="hide-show-cols" id="client-last-name" />
                                <label htmlFor="">
                                    last name
                                </label>
                                <input type="checkbox" name="hide-show-cols" id="email" />
                                <label htmlFor="">
                                    الإيميل
                                </label>
                            </div>
                        </div>
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