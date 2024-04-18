import { Outlet } from "react-router-dom"
import Header from "../../Pages/Header/Header"
import styles from "./root-layout.module.css"
import Sidebar from "../../components/Sideabar/Sideabar"
import Breadcumbs from "../../components/Breadcumbs/Breadcumbs"
const RootLayout = () => {
  return (
    <div className={styles.rootLayout}>
        <Header />
        <Sidebar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout