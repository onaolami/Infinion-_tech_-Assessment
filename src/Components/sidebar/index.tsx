import { Link } from "react-router-dom";
import Button from "../button";
import styles from "./styles.module.css";
const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <img className={styles.image} src="/Images/message.png" />

        <h1 className={styles.text}>Scrutz</h1>
      </div>

      <div className={styles.wrapper}>
        <div>
          <Link to="/campaigns/new">
            <Button className={styles.btn} size="LARGE" variant="PRIMARY">
              <img src="/Images/cross.png" alt="" />
              New Campaign
            </Button>
          </Link>
        </div>

        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link to="">
              <img src="/Images/overview.png" alt="" />
              <p>Overview</p>
            </Link>
          </li>

          <li className={styles.navListItem}>
            <Link to="/campaigns">
              <img src="/Images/campaign.png" alt="" />
              <p>Campaign</p>
            </Link>
          </li>

          <li className={styles.navListItem}>
            <Link to="">
              <img src="/Images/market.png" alt="" />
              <p>Market Intelligence</p>
            </Link>
          </li>

          <li className={styles.navListItem}>
            <Link to="">
              <img src="/Images/account.png" alt="" />
              <p>Account Settings</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.question}>
        <img src="/Images/question.png" alt="" />
        <p>Need help?</p>
        <p>
          We are readily available <br /> to provide help
        </p>

        <Button size="SMALL" variant="OUTLINE">
          Get help
        </Button>
      </div>
    </div>
  );
};
export default SideBar;
