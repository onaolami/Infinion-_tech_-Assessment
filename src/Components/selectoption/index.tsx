import Select from "react-select";
import styles from "./styles.module.css";

const options = [
  { value: "Filter by date", label: "Filter by date" },
  { value: "Filter by status", label: "Filter by status" },
  { value: "Filter by campaign name", label: "Filter by campaign name" },
];

const SelectOption = () => (
  <Select className={styles.select} options={options} />
);

export default SelectOption;
