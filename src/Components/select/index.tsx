import ReactSelect, { Props } from "react-select";
import styles from "./styles.module.css";

interface IProps extends Props {
  label?: string;
  error?: string | false | undefined;
}
const Select = ({ label, error, ...others }: IProps) => {
  return (
    <div>
      {label && <label className={styles.inputLabel}>{label}</label>}

      <ReactSelect {...others} />

      {!!error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Select;
