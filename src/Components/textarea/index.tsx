import { TextareaHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | false | undefined;
}

const Textarea = ({ className, label, error, ...others }: IProps) => {
  return (
    <div className={styles.inputDiv}>
      {label && <label className={styles.inputLabel}>{label}</label>}

      <textarea
        className={`${styles.input} ${
          !!error ? styles.inputError : ""
        } ${className}`}
        {...others}
      />

      {!!error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Textarea;
