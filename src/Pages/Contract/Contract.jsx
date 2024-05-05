import Breadcumbs from "../../components/Breadcumbs/Breadcumbs"
import Card from "../../components/Card/Card"
import styles from "./contract.module.css"
import contract from "../../assets/files/235-53428896.pdf"

const Contract = () => {
  return (
    <div className={styles.contract}>
        <Breadcumbs pageName={"تفاصيل العقد"}></Breadcumbs>
        <Card>
            <iframe src={contract}></iframe>
        </Card>
    </div>
  )
}

export default Contract