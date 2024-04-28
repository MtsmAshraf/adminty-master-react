import React from "react";
import styles from "./component-to-print.module.css"
class ComponentToPrint extends React.Component {
    render() {
      return (
        <div className={styles.componentToPrint} style={{position: "absolute", zIndex: "1"}}>
          <div className={styles.container}>
            <table cellSpacing={0}>
              <thead>
                <th colSpan={9}>
                  بيانات البوليصة
                </th>
              </thead>
              <tr className={styles.headRow}>
                <td>
                  رقم البوليصة
                </td>
                <td>
                  اسم المستورد
                </td>
                <td>
                  اسم المصدر
                </td>
                <td>
                  بلد القدوم
                </td>
                <td>
                  بلد الوصول
                </td>
                <td>
                  المنفذ
                </td>
                <td>
                  عدد الطرود
                </td>
                <td>
                  الوزن (Kg)
                </td>
                <td>
                  القياسات (m)
                </td>
              </tr>
              <tr>
                <td>
                  067-65465768
                </td>
                <td>
                  اسم المستورد
                </td>
                <td>
                  اسم المصدر
                </td>
                <td>
                  United States of America
                </td>
                <td>
                  Saudi Arabia
                </td>
                <td>
                  اسم المنفذ
                </td>
                <td>
                  312
                </td>
                <td>
                  25
                </td>
                <td>
                  3 * 4 * 2
                </td>
              </tr>
              <thead>
                <th colSpan={9}>
                  بيانات البيان الجمركي
                </th>
              </thead>
              <tr className={styles.headRow}>
                <td>
                  رقم البوليصة
                </td>
                <td>
                  اسم المستورد
                </td>
                <td>
                  اسم المصدر
                </td>
                <td>
                  بلد القدوم
                </td>
                <td>
                  بلد الوصول
                </td>
              </tr>
              <tr>
                <td>
                  067-65465768
                </td>
                <td>
                  اسم المستورد
                </td>
                <td>
                  اسم المصدر
                </td>
                <td>
                  United States of America
                </td>
                <td>
                  Saudi Arabia
                </td>
              </tr>
            </table>
          </div>
        </div>
      );
    }
  }
  
  export default ComponentToPrint;