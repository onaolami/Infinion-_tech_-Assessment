import { Icon } from "@iconify/react";
import Button from "../button";
import Modal from "../modal";
import styles from "./styles.module.css";
import { ICampaign } from "../../types/campaign.types";
import campaignService from "../../services/campaign.service";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

interface IProps {
  data: ICampaign;
  small?: boolean;
}
const DeleteCampaign = ({ data, small }: IProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const handleDelete = () => {
    if (!data?.id) return;

    setDeleting(true);
    campaignService
      .deleteCampaign(data.id)
      .then(async () => {
        await queryClient.invalidateQueries({ queryKey: ["campaigns"] });
        closeDeleteModal();
        setDeleting(false);
        setDeleted(true);
      })
      .catch((err: any) => {
        alert(err.message);
        setDeleting(false);
      });
  };

  const handlePostDelete = () => {
    setDeleted(false);
    navigate("/campaigns");
  };

  return (
    <>
      {small ? (
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            setDeleteModalIsOpen(true);
          }}
          title="Delete"
        >
          <Icon
            height="20px"
            width="20px"
            icon="material-symbols:delete-outline"
          />
        </Link>
      ) : (
        <Button
          variant="DANGER"
          type="button"
          onClick={() => setDeleteModalIsOpen(true)}
        >
          <Icon
            height="20px"
            width="20px"
            icon="material-symbols:delete-outline"
          />
        </Button>
      )}
      <Modal isOpen={deleted} closeModal={handlePostDelete}>
        <div className={styles.alert}>
          <h1>Campaign deleted successfully</h1>
          <Button
            variant="PRIMARY"
            size="LARGE"
            onClick={handlePostDelete}
            type="button"
          >
            Okay
          </Button>
        </div>
      </Modal>
      <Modal isOpen={deleteModalIsOpen} closeModal={closeDeleteModal}>
        <div className={styles.alert}>
          <h1>Delete Campaign</h1>
          <p>
            Are You sure you want to delete {data.campaignName} campaign? This
            action cannot be undone.
          </p>
          <div className={styles.btns}>
            <Button
              variant="OUTLINE"
              size="LARGE"
              type="button"
              onClick={closeDeleteModal}
            >
              Cancel
            </Button>
            <Button
              variant="DANGER"
              size="LARGE"
              type="button"
              onClick={handleDelete}
              isLoading={deleting}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteCampaign;
