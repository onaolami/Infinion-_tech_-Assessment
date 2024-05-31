import { TagsInput, TagsInputProps } from "react-tag-input-component";
import styles from "./styles.module.css";

interface IProps extends Omit<TagsInputProps, "classNames"> {
  label?: string;
  error?: string | false | undefined;
  className?: string;
  tagClassName?: string;
}
const TextareaTags = ({
  label,
  error,
  className,
  tagClassName,
  ...others
}: IProps) => {
  return (
    <div>
      {label && <label className={styles.inputLabel}>{label}</label>}

      <TagsInput
        classNames={{
          input: `${styles.input} ${
            !!error ? styles.inputError : ""
          } ${className}`,
          tag: `${styles.tag} ${tagClassName}`,
        }}
        {...others}
      />

      {!!error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default TextareaTags;
