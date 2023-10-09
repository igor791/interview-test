import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export interface Heading extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<Heading> = ({ size = "h2", className, ...attrs }) =>
  React.createElement(size, {
    ...attrs,
    className: classNames(styles.heading, className, styles[size]),
  });

export default Heading;
