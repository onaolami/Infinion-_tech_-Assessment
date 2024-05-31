import Input from "../Input";
import styles from "./style.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <Input placeholder="Search..." />
      <img src="/Images/search.png" alt="" />
      <div className={styles.contain}>
        <img src="/Images/notifications.png" alt="" />
        <div className={styles.lines}></div>
        <img className={styles.img} src="/Images/img.png" alt="" />
        <p>Big Tech</p>
        <img  src="/Images/dropdown.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
