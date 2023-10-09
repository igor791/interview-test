import React from "react";

import { Heading } from "../../components";

import FilterBar from "../FilterBar";

import styles from "./styles.module.scss";

const Navbar: React.FC = () => (
  <header className={styles.header}>
    <article className={styles.logo}>
      <Heading size="h1">Interview test</Heading>
    </article>
    <FilterBar />
  </header>
);

export default Navbar;
