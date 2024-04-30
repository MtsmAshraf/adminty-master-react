import { Link } from "react-router-dom"
import Card from "../../components/Card/Card"
import styles from "./translation.module.css"

const Translation = () => {
  return (
    <div className={styles.translation}>
        <Card>
            <h3>
                الترجمة
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
                        <Link>
                            312-31212412
                        </Link>
                    </td>
                    <td>
                        <Link>
                            20 - 03 -2024
                        </Link>
                    </td>
                    <td>
                        <Link>
                            اسم العميل
                        </Link>
                    </td>
                    <td>
                        <Link>
                            تم
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link>
                            312-31212412
                        </Link>
                    </td>
                    <td>
                        <Link>
                            20 - 03 -2024
                        </Link>
                    </td>
                    <td>
                        <Link>
                            اسم العميل
                        </Link>
                    </td>
                    <td>
                        <Link>
                            تم
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link>
                            312-31212412
                        </Link>
                    </td>
                    <td>
                        <Link>
                            20 - 03 -2024
                        </Link>
                    </td>
                    <td>
                        <Link>
                            اسم العميل
                        </Link>
                    </td>
                    <td>
                        <Link>
                            تم
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link>
                            312-31212412
                        </Link>
                    </td>
                    <td>
                        <Link>
                            20 - 03 -2024
                        </Link>
                    </td>
                    <td>
                        <Link>
                            اسم العميل
                        </Link>
                    </td>
                    <td>
                        <Link>
                            تم
                        </Link>
                    </td>
                </tr>
            </table>
        </Card>
    </div>
  )
}

export default Translation