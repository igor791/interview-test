import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

const Divider: React.FC<React.HTMLAttributes<HTMLHRElement>> = ({ className, ...attrs }) => (
  <hr {...attrs} className={classNames(styles.divider, className)} />
);

export default Divider;
