import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "primary" | "secondary" | "danger";
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  variant = "primary",
  className,
  children,
  ...attrs
}) => (
  <button
    type={type}
    {...attrs}
    className={classNames(styles.default, className, variant && styles[variant])}
  >
    {children}
  </button>
);

export default Button;
