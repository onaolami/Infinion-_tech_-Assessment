import React from "react";
import Button from "../../Components/button";
import Input from "../../Components/Input";
import styles from "./style.module.css";
import { Icon } from "@iconify/react";
import Pagination from "../../Components/pagination";

import SelectOption from "../../Components/selectoption";
import { useQuery } from "@tanstack/react-query";
import campaignService from "../../services/campaign.service";
import { format } from "date-fns";
import { ICampaign } from "../../types/campaign.types";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";

const CampaignPage = () => {
  const { data, isLoading, isError, error } = useQuery<
    ICampaign[],
    AxiosError<any>
  >({
    queryKey: ["campaigns"],
    queryFn: campaignService.getAllCampaigns,
  });

  return (
    <div className={styles.container}>
      <h1>All campaigns</h1>

      <div className={styles.contain}>
        <div className={styles.button}>
          <Button size="SMALL" variant="OUTLINE">
            ALL (90)
          </Button>

          <Button size="SMALL" variant="OUTLINE">
            Inactive (90)
          </Button>
          <Button size="SMALL" variant="OUTLINE">
            Active (90)
          </Button>
        </div>
        <div className={styles.wrap}>
          <div>
            <Input placeholder="Search" />
            <img src="/Images/search.png" alt="" />
          </div>
          <div>
            <SelectOption />
          </div>
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
          <div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Campaign Name</th>
                  <th>Start Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {data.map((campaign, index) => (
                  <tr key={campaign.id}>
                    <td>{index + 1}</td>
                    <td>{campaign.campaignName}</td>
                    <td>
                      {format(new Date(campaign.startDate), "dd/MM/yyyy")}
                    </td>
                    <td>
                      <span className={styles.active}>Active</span>
                    </td>
                    <td>
                      <div className={styles.icon}>
                        <Link to={`/campaigns/${campaign.id}`} title="View">
                          <Icon height="20px" width="20px" icon="ph:eye" />
                        </Link>
                        <Link to={`/campaigns/${campaign.id}`} title="Edit">
                          <Icon height="20px" width="20px" icon="mage:edit" />
                        </Link>
                        <Link to={`/campaigns/${campaign.id}`} title="Delete">
                          <Icon
                            height="20px"
                            width="20px"
                            icon="material-symbols:delete-outline"
                          />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}

      <div className={styles.flex}>
        <Pagination pageCount={1} forcePage={0} />
        <p>showing 10 of 40 results</p>
      </div>
    </div>
  );
};

export default CampaignPage;
