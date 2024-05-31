import { Field, FieldProps, Form, Formik } from "formik";
import Input from "../../Components/Input";
import styles from "./styles.module.css";
import Textarea from "../../Components/textarea";
import Button from "../../Components/button";
import ReactSwitch from "react-switch";
import TextareaTags from "../../Components/textarea-tags";
import ReactSelect from "react-select";
import Select from "../../Components/select";

const NewCampaign = () => {
  const initialValues: any = {
    keywords: [],
  };

  const onSubmit = () => {};

  return (
    <div>
      <h1>Create New Campaign</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.form}>
            <Field name="name">
              {({ field, meta }: FieldProps) => (
                <Input
                  placeholder="e.g The Future is now"
                  label="Campaign Name"
                  error={meta.touched && meta.error}
                  {...field}
                />
              )}
            </Field>

            <Field name="description">
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
                  />
                )}
              </Field>
            </div>

            <div className={styles.subscribe}>
              <p>Want to receive daily digest about the campaign?</p>
              <ReactSwitch
                checked={values.subscribe}
                onChange={(checked) => setFieldValue("subscribe", checked)}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor="#6E0080"
                width={50}
              />
            </div>

            <Field name="keywords">
              {({ field, meta }: FieldProps) => (
                <TextareaTags
                  placeHolder="To add keywords, type your keyword and press enter"
                  label="Linked Keywords"
                  error={meta.touched && meta.error}
                  name="keywords"
                  value={field.value}
                  onChange={(tags) => {
                    field.onChange({
                      target: {
                        values: tags,
                      },
                    });
                  }}
                />
              )}
            </Field>

            <Field name="frequency">
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

            <div className={styles.btns}>
              <Button variant="OUTLINE">Cancel</Button>
              <Button variant="PRIMARY">Create Campaign</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewCampaign;
