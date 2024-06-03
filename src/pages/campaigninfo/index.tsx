import { Icon } from "@iconify/react";
import styles from "./styles.module.css";

import CampaignForm from "../../Components/campaign-form";
import { useQuery } from "@tanstack/react-query";
import {  useNavigate, useParams } from "react-router-dom";
import campaignService from "../../services/campaign.service";

const CampaignInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["campaign", "single", id],
    queryFn: () => campaignService.getCampaign(Number(id)),
  });

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={goBack} className={styles.backBtn}>
        <Icon icon="ic:baseline-arrow-back" />
        <p>Back</p>
      </button>
      <div className={styles.wrap}>
        <h1>Campaign Information</h1>
        <div className={styles.status}>
          <p>Campaign Status</p>
          <div className={styles.line}></div>
          {!!data && data.campaignStatus === "Active" ? (
            <p className={styles.active}>Active</p>
          ) : (
            <p className={styles.inactive}>Inactive</p>
          )}
        </div>
      </div>

      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : isError ? (
        <div>
          <p>An error occurred: {error.message}</p>
        </div>
      ) : (
        !!data && (
          <CampaignForm type="EDIT" data={{ ...data, id: Number(id) }} />
        )
      )}
    </div>
  );
};

export default CampaignInfo;
