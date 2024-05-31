import { Icon } from "@iconify/react";
import styles from "./styles.module.css";
import Input from "../../Components/Input";

const CampaignInfo = () => {
  return (
    <div>
      <div className={styles.icon}>
        <Icon icon="ic:baseline-arrow-back" />
        <p>Back</p>
      </div>
      <div className={styles.wrap}>
        <h1>Campaign Information</h1>
        <div className={styles.status}>
          <p>Campaign Status</p>
          <div className={styles.line}></div>
          <p className={styles.active}>Active</p>
        </div>
      </div>
      <div>
        <p>Campaign Name</p>
        <Input placeholder="Fidelity Bank" />
      </div>
      <div className={styles.flex}>
        <div className={styles.input}>
          <p>Start Date</p>
          <Input placeholder="27/10/2022" />
        </div>
        <div className={styles.input}>
          <p>End date</p>
          <Input placeholder="27/11/2022" />
        </div>
      </div>
    </div>
  );
};

export default CampaignInfo;
