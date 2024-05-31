import Button from "../../Components/button";
import styles from "./styles.module.css";

const OverviewPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.text}>Overview</h1>

        <div className={styles.contain}>
          <div className={styles.wrap}>
            <img src="/Images/date.png" alt="" />
            <p>Date range</p>
            <p>Nov 1,2022 - Nov 7,2022</p>
            <img src="/Images/dropdown.png" alt="" />
          </div>

          <div className={styles.export}>
            <img src="/Images/export.png" alt="" />
            <p>Export</p>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <img className={styles.img} src="/Images/Group.svg" alt="" />
        <p>No activity yet.Create a new campaign to get started with</p>
        <div>
          <Button size="LARGE" variant="PRIMARY">
            <img src="/Images/cross.png" alt="" />
            New Campaign
          </Button>
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
