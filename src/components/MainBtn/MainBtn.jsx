import styles from "./main-btn.module.css";

const MainBtn = ({children}) => {
  return (
    <button className={styles.mainBtn}>
        {children}
    </button>
  )
}

export default MainBtn