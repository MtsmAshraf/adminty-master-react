import Card from "../../components/Card/Card";
import styles from "./invoice.module.css";
import billPdf from "../../assets/files/235-53428896.pdf";
import { Link } from "react-router-dom";
const Invoice = () => {
  return (
    <div className={styles.invoice}>
      <Card>
        <div className={styles.details}>
          <div className={styles.pair}>
              <h5>رقم البوليصة</h5>
              <span>465-6546547</span>
          </div>
          <div className={styles.pair}>
              <h5>اسم المصدر</h5>
              <span>اسم المصدر</span>
          </div>
          <div className={styles.pair}>
              <h5>اسم المستورد</h5>
              <span>اسم المستورد</span>
          </div>
          <div className={styles.pair}>
              <h5>بلد القدوم</h5>
              <span>United States of America</span>
          </div>
          <div className={styles.pair}>
              <h5>بلد الوصول</h5>
              <span>Saudi Arabia</span>
          </div>
          <div className={styles.pair}>
              <h5>المنفذ</h5>
              <span>اسم المنفذ</span>
          </div>
          <div className={styles.pair}>
              <h5>عدد الطرود</h5>
              <span>46</span>
          </div>
          <div className={styles.pair}>
              <h5>الوزن (Kg)</h5>
              <span>4547</span>
          </div>
          <div className={styles.pair}>
              <h5>القياسات (m)</h5>
              <span>4 * 3 * 3</span>
          </div>
        </div>
      </Card>
      <Card>
        <iframe src={billPdf} frameborder="0"></iframe>
      </Card>
      <Link className={styles.goBack} to="/invoice-list">
        back
      </Link>
    </div>
  )
}

export default Invoice