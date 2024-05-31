import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | false | undefined;
}

const Input = ({ className, label, error, ...others }: IProps) => {
  return (
    <div className={styles.inputDiv}>
      {label && <label className={styles.inputLabel}>{label}</label>}

      <input
        className={`${styles.input} ${
          !!error ? styles.inputError : ""
        } ${className}`}
        {...others}
      />

      {!!error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
