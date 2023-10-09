import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "search-input";
  label?: string;
  labelPosition?: "column" | "inline";
}

const Input: React.FC<InputProps> = ({
  variant,
  className,
  type = "text",
  label,
  labelPosition = "inline",
  id,
  ...props
}) => {
  const inputId = id || React.useId();

  return (
    <div className={classNames(styles.container, labelPosition === "inline" && styles.labelInline)}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        {...props}
        id={inputId}
        type={type}
        className={classNames(styles.input, className, variant && styles[variant])}
      />
    </div>
  );
};

export default Input;
