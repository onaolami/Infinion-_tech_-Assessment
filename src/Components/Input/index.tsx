import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | false | undefined;
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
}

const Input = ({
  className,
  label,
  error,
  contentAfter,
  contentBefore,
  ...others
}: IProps) => {
  return (
    <div className={styles.inputDiv}>
      {label && <label className={styles.inputLabel}>{label}</label>}

      <div className={styles.inputWrapper}>
        {!!contentBefore && (
          <div className={styles.contentBefore}>{contentBefore}</div>
        )}
        <input
          className={`${styles.input} ${!!error ? styles.inputError : ""} ${
            !!contentBefore ? styles.hasBefore : ""
          } ${!!contentAfter ? styles.hasAfter : ""} ${className}`}
          {...others}
        />
        {!!contentAfter && (
          <div className={styles.contentAfter}>{contentAfter}</div>
        )}
      </div>

      {!!error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
