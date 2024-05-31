import CampaignForm from "../../Components/campaign-form";

const NewCampaign = () => {
  return (
    <div>
      <h1>Create New Campaign</h1>

      <CampaignForm type="CREATE" />
    </div>
  );
};

export default NewCampaign;
