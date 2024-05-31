import { ButtonHTMLAttributes, useMemo } from "react";
import styles from "./styles.module.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "DEFAULT" | "SMALL" | "LARGE";
  children?: React.ReactNode;
  variant?: "DEFAULT" | "PRIMARY" | "OUTLINE" | "DANGER";
  className?: string;
  isLoading?: boolean;
}

const Button = ({
  children,
  size = "DEFAULT",
  variant = "DEFAULT",
  className,
  isLoading,
  disabled,
  ...Others
}: IProps) => {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case "SMALL":
        return styles.sizeSmall;

      case "LARGE":
        return styles.sizeLarge;

      case "DEFAULT":
        return styles.sizeDefault;
    }
  }, [size]);

  const variantStyle = useMemo(() => {
    switch (variant) {
      case "PRIMARY":
        return styles.variantPrimary;

      case "DEFAULT":
        return styles.variantDefault;

      case "OUTLINE":
        return styles.variantOutline;

      case "DANGER":
        return styles.variantDanger;
    }
  }, [variant]);

  return (
    <button
      className={`${styles.btn} ${variantStyle} ${sizeStyle} ${className} `}
      disabled={isLoading || disabled}
      {...Others}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
