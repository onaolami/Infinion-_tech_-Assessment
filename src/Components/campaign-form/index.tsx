import { Formik, Field, FieldProps, FormikHelpers, Form } from "formik";
import { useNavigate } from "react-router-dom";
import ReactSwitch from "react-switch";
import { ICampaign } from "../../types/campaign.types";
import Input from "../Input";
import Button from "../button";
import Select from "../select";
import Textarea from "../textarea";
import TextareaTags from "../textarea-tags";
import styles from "./styles.module.css";
import { useQueryClient } from "@tanstack/react-query";
import campaignService from "../../services/campaign.service";
import { format } from "date-fns";
import Modal from "../modal";
import { useState } from "react";
import { Icon } from "@iconify/react";
import DeleteCampaign from "./deleteCampaign";

interface IProps {
  data?: ICampaign;
  type: "CREATE" | "EDIT";
}
const CampaignForm = ({ data, type }: IProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [newModalIsOpen, setNewModalIsOpen] = useState(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  const [settingStatus, setSettingStatus] = useState(false);
  
  const handleNewModalAccept = () => {
    setNewModalIsOpen(false);
    navigate("/campaigns");
  };

  const cancelAdd = () => {
    navigate(-1);
  };

  const closeUpdateModal = () => {
    setUpdateModalIsOpen(false);
  };

  const setCampaignStatus = (status: boolean) => {
    if (!data?.id) return;
    setSettingStatus(true);
    campaignService
      .setCampaignStatus(data.id, status)
      .then(async () => {
        await queryClient.invalidateQueries({
          queryKey: ["campaign", "single", data.id?.toString()],
        });
        setSettingStatus(false);
      })
      .catch((err: any) => {
        setSettingStatus(false);
        alert(err.message);
      });
  };

  const initialValues: ICampaign = data ?? {
    campaignName: "",
    campaignDescription: "",
    startDate: undefined,
    endDate: undefined,
    digestCampaign: "No",
    linkedKeywords: [],
    dailyDigest: "",
  };

  const onSubmit = (values: ICampaign, helpers: FormikHelpers<ICampaign>) => {
    const action =
      type === "CREATE"
        ? campaignService.createCampaign
        : campaignService.updateCampaign;

    action(values)
      .then(async () => {
        await queryClient.invalidateQueries({ queryKey: ["campaigns"] });
        if (type === "CREATE") {
          setNewModalIsOpen(true);
        } else {
          setUpdateModalIsOpen(true);
        }
        helpers.setSubmitting(false);
      })
      .catch((err) => {
        helpers.setSubmitting(false);
      });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.form}>
            <Field name="campaignName">
              {({ field, meta }: FieldProps) => (
                <Input
                  placeholder="e.g The Future is now"
                  label="Campaign Name"
                  error={meta.touched && meta.error}
                  {...field}
                />
              )}
            </Field>

            <Field name="campaignDescription">
              {({ field, meta }: FieldProps) => (
                <Textarea
                  placeholder="Please add a description to your campaign"
                  label="Campaign Description"
                  error={meta.touched && meta.error}
                  rows={3}
                  {...field}
                />
              )}
            </Field>

            <div className={styles.dates}>
              <Field name="startDate">
                {({ field, meta }: FieldProps) => (
                  <Input
                    placeholder="Start Date"
                    label="Start Date"
                    error={meta.touched && meta.error}
                    type="date"
                    {...field}
                    value={
                      !!field.value
                        ? format(new Date(field.value), "yyyy-MM-dd")
                        : undefined
                    }
                  />
                )}
              </Field>

              <Field name="endDate">
                {({ field, meta }: FieldProps) => (
                  <Input
                    placeholder="End Date"
                    label="End Date"
                    error={meta.touched && meta.error}
                    type="date"
                    {...field}
                    value={
                      !!field.value
                        ? format(new Date(field.value), "yyyy-MM-dd")
                        : undefined
                    }
                  />
                )}
              </Field>
            </div>

            <div className={styles.subscribe}>
              <p>Want to receive daily digest about the campaign?</p>
              <ReactSwitch
                checked={values.digestCampaign === "Yes"}
                onChange={(checked) =>
                  setFieldValue("digestCampaign", checked ? "Yes" : "No")
                }
                checkedIcon={false}
                uncheckedIcon={false}
                onColor="#6E0080"
                width={50}
              />
            </div>

            <Field name="linkedKeywords">
              {({ field, meta }: FieldProps) => (
                <TextareaTags
                  placeHolder="To add keywords, type your keyword and press enter"
                  label="Linked Keywords"
                  error={meta.touched && meta.error}
                  name={field.name}
                  value={values.linkedKeywords}
                  onChange={(tags) => {
                    setFieldValue(field.name, tags);
                  }}
                />
              )}
            </Field>

            <Field name="dailyDigest">
              {({ field, meta }: FieldProps) => (
                <Select
                  label="Kindly select how often you want to receive daily digest"
                  error={meta.touched && meta.error}
                  options={[{ label: "Daily", value: "Daily" }]}
                  value={field.value}
                  className={styles.select}
                  onChange={(newValue: any) => {
                    console.log(newValue);
                    field.onChange({
                      target: {
                        values: newValue,
                      },
                    });
                  }}
                />
              )}
            </Field>

            {type === "CREATE" && (
              <>
                <div className={styles.btns}>
                  <Button variant="OUTLINE" type="button" onClick={cancelAdd}>
                    Cancel
                  </Button>
                  <Button variant="PRIMARY" type="submit">
                    Create Campaign
                  </Button>
                </div>
                <Modal
                  isOpen={newModalIsOpen}
                  closeModal={handleNewModalAccept}
                >
                  <div className={styles.alert}>
                    <Icon
                      icon="solar:check-circle-bold"
                      width={90}
                      height={90}
                      color="var(--primary-color)"
                    />
                    <h1>Campaign created successfully</h1>
                    <Button
                      variant="PRIMARY"
                      size="LARGE"
                      type="button"
                      onClick={handleNewModalAccept}
                    >
                      Go back to campaign list
                    </Button>
                  </div>
                </Modal>
              </>
            )}

            {type === "EDIT" && (
              <>
                <div className={styles.btns}>
                  <Button
                    variant={
                      data?.campaignStatus === "Active" ? "DANGER" : "PRIMARY"
                    }
                    type="button"
                    onClick={() =>
                      setCampaignStatus(values.campaignStatus !== "Active")
                    }
                    isLoading={settingStatus}
                  >
                    {values.campaignStatus === "Active"
                      ? "Stop Campaign"
                      : "Start Campaign"}
                  </Button>
                  <Button variant="OUTLINE" type="submit">
                    Edit Information
                  </Button>
                  <DeleteCampaign data={data!} />
                </div>
                <Modal isOpen={updateModalIsOpen} closeModal={closeUpdateModal}>
                  <div className={styles.alert}>
                    <h1>Campaign updated successfully</h1>
                    <Button
                      variant="PRIMARY"
                      size="LARGE"
                      onClick={closeUpdateModal}
                      type="button"
                    >
                      Okay
                    </Button>
                  </div>
                </Modal>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CampaignForm;
