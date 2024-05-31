import { Outlet } from "react-router-dom";
import SideBar from "../sidebar";
import styles from "./styles.module.css";
import Header from "../header";

const Layout = () => {
  return (
    <div className={styles.flex}>
      <SideBar />
      <div className={styles.container}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
