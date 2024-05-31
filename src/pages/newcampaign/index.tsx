import CampaignForm from "../../Components/campaign-form";
import styles from "./styles.module.css"
const NewCampaign = () => {
  return (
    <div>
      <h1 className={styles.text}>Create New Campaign</h1>

      <CampaignForm type="CREATE" />
    </div>
  );
};

export default NewCampaign;
