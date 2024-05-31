import { ButtonHTMLAttributes, useMemo } from "react";
import styles from "./styles.module.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "DEFAULT" | "SMALL" | "LARGE";
  children?: React.ReactNode;
  variant?: "DEFAULT" | "PRIMARY"|"OUTLINE"
  className?: string;
}

const Button = ({
  children,
  size = "DEFAULT",
  variant = "DEFAULT",
  className,
  ...Others
}: IProps) => {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case "SMALL":
        return styles.SizeSmall;

      case "LARGE":
        return styles.SizeLarge;

      case "DEFAULT":
        return styles.SizeDefault;

     

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
    }
  }, [variant]);

  return (
    <button
      className={`${styles.btn} ${variantStyle} ${sizeStyle} ${className} `}
      {...Others}
    >
      {children}
    </button>
  );
};

export default Button;
