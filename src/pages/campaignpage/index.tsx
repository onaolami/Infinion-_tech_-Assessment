import React from "react";
import Button from "../../Components/button";
import Input from "../../Components/Input";
import styles from "./style.module.css";
import { Icon } from "@iconify/react";
import Pagination from "../../Components/pagination";

import SelectOption from "../../Components/selectoption";

const CampaignPage = () => {
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
            <tr>
              <td>1</td>
              <td>Infinion Tech</td>
              <td>27/10/2022</td>
              <td>
                <span className={styles.active}>Active</span>
              </td>
              <td>
                <div className={styles.icon}>
                  <Icon height="20px" width="20px" icon="ph:eye" />
                  <Icon height="20px" width="20px" icon="mage:edit" />
                  <Icon
                    height="20px"
                    width="20px"
                    icon="material-symbols:delete-outline"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Infinion Tech</td>
              <td>27/10/2022</td>
              <td>
                <span className={styles.active}>Active</span>
              </td>
              <td>
                <div className={styles.icon}>
                  <Icon height="20px" width="20px" icon="ph:eye" />
                  <Icon height="20px" width="20px" icon="mage:edit" />
                  <Icon
                    height="20px"
                    width="20px"
                    icon="material-symbols:delete-outline"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Infinion Tech</td>
              <td>27/10/2022</td>
              <td>
                <span className={styles.inactive}>inactive</span>
              </td>
              <td>
                <div className={styles.icon}>
                  <Icon height="20px" width="20px" icon="ph:eye" />
                  <Icon height="20px" width="20px" icon="mage:edit" />
                  <Icon
                    height="20px"
                    width="20px"
                    icon="material-symbols:delete-outline"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>Infinion Tech</td>
              <td>27/10/2022</td>
              <td>
                <span className={styles.active}>Active</span>
              </td>
              <td>
                <div className={styles.icon}>
                  <Icon height="20px" width="20px" icon="ph:eye" />
                  <Icon height="20px" width="20px" icon="mage:edit" />
                  <Icon
                    height="20px"
                    width="20px"
                    icon="material-symbols:delete-outline"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>Infinion Tech</td>
              <td>27/10/2022</td>
              <td>
                <span className={styles.inactive}>inactive</span>
              </td>
              <td>
                <div className={styles.icon}>
                  <Icon height="20px" width="20px" icon="ph:eye" />
                  <Icon height="20px" width="20px" icon="mage:edit" />
                  <Icon
                    height="20px"
                    width="20px"
                    icon="material-symbols:delete-outline"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>6</td>
              <td>Infinion Tech</td>
              <td>27/10/2022</td>
              <td>
                <span className={styles.active}>Active</span>
              </td>
              <td>
                <div className={styles.icon}>
                  <Icon height="20px" width="20px" icon="ph:eye" />
                  <Icon height="20px" width="20px" icon="mage:edit" />
                  <Icon
                    height="20px"
                    width="20px"
                    icon="material-symbols:delete-outline"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>7</td>
              <td>Infinion Tech</td>
              <td>27/10/2022</td>
              <td>ACTIVE</td>
              <td>
                <div className={styles.icon}>
                  <Icon height="20px" width="20px" icon="ph:eye" />
                  <Icon height="20px" width="20px" icon="mage:edit" />
                  <Icon
                    height="20px"
                    width="20px"
                    icon="material-symbols:delete-outline"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>8</td>
              <td>Infinion Tech</td>
              <td>27/10/2022</td>
              <td>
                <span className={styles.active}>Active</span>
              </td>
              <td>
                <div className={styles.icon}>
                  <Icon height="20px" width="20px" icon="ph:eye" />
                  <Icon height="20px" width="20px" icon="mage:edit" />
                  <Icon
                    height="20px"
                    width="20px"
                    icon="material-symbols:delete-outline"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>9</td>
              <td>Infinion Tech</td>
              <td>27/10/2022</td>
              <td>
                <span className={styles.inactive}>inactive</span>
              </td>
              <td>
                <div className={styles.icon}>
                  <Icon height="20px" width="20px" icon="ph:eye" />
                  <Icon height="20px" width="20px" icon="mage:edit" />
                  <Icon
                    height="20px"
                    width="20px"
                    icon="material-symbols:delete-outline"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>10</td>
              <td>Infinion Tech</td>
              <td>27/10/2022</td>
              <td>
                <span className={styles.active}>Active</span>
              </td>
              <td>
                <div className={styles.icon}>
                  <Icon height="20px" width="20px" icon="ph:eye" />
                  <Icon height="20px" width="20px" icon="mage:edit" />
                  <Icon
                    height="20px"
                    width="20px"
                    icon="material-symbols:delete-outline"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.flex}>
        <Pagination />
        <p>showing 10 of 40 results</p>
      </div>
    </div>
  );
};

export default CampaignPage;
