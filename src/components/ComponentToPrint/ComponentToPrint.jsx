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
                <td colSpan={2}>
                  رقم البيان
                </td>
                <td colSpan={2}>
                  التاريخ
                </td>
                <td>
                  المبلغ (SAR)
                </td>
                <td colSpan={2}>
                  الرقم الموحد
                </td>
                <td colSpan={2}>
                  حالة السداد
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  067-65465768
                </td>
                <td colSpan={2}>
                  25 - 7 - 2024
                </td>
                <td>
                  187523
                </td>
                <td colSpan={2}>
                  067-65465768
                </td>
                <td colSpan={2}>
                  مدفوع
                </td>
              </tr>
              <thead>
                <th colSpan={9}>
                  بيانات سداد سال
                </th>
              </thead>
              <tr className={styles.headRow}>
                <td colSpan={2}>
                  رقم سداد سال
                </td>
                <td colSpan={2}>
                  التاريخ
                </td>
                <td>
                  المبلغ (SAR)
                </td>
                <td colSpan={2}>
                  عدد الطرود
                </td>
                <td colSpan={2}>
                  حالة السداد
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  067-65465768
                </td>
                <td colSpan={2}>
                  25 - 7 - 2024
                </td>
                <td>
                  187523
                </td>
                <td colSpan={2}>
                  32
                </td>
                <td colSpan={2}>
                  مدفوع
                </td>
              </tr>
              <thead>
                <th colSpan={9}>
                  بيانات عملية النقل
                </th>
              </thead>
              <tr className={styles.headRow}>
                <td colSpan={3}>
                  موقع التنزيل
                </td>
                <td colSpan={2}>
                  اسم المستلم
                </td>
                <td colSpan={2}>
                  رقم الجوال
                </td>
                <td colSpan={2}>
                  عدد الطرود
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  067-65465768
                </td>
                <td colSpan={2}>
                  25 - 7 - 2024
                </td>
                <td colSpan={2}>
                  96034234251
                </td>
                <td colSpan={2}>
                  10
                </td>
              </tr>
              <thead>
                <th colSpan={9}>
                  تفاصيل البضاعة
                </th>
              </thead>
              <tr className={styles.headRow}>
                <td colSpan={3}>
                  رقم البوليصة
                </td>
                <td colSpan={2}>
                  اسم الشركة
                </td>
                <td colSpan={2}>
                  عدد الطرود
                </td>
                <td colSpan={2}>
                  اسم السائق المستلم
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  067-65465768
                </td>
                <td colSpan={2}>
                  اسم الشركة
                </td>
                <td colSpan={2}>
                  13
                </td>
                <td colSpan={2}>
                  اسم السائق المستلم
                </td>
              </tr>
            </table>
          </div>
        </div>
      );
    }
  }
  
  export default ComponentToPrint;