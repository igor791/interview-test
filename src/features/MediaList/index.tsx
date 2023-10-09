import React from "react";
import { observer } from "mobx-react-lite";

import MediaItem from "../MediaItem";

import styles from "./styles.module.scss";

export interface MediaListProps {
  list: MediaItem[];
}

const MediaList: React.FC<MediaListProps> = observer(({ list }) => (
  <section className={styles.container}>
    {list.map((item) => (
      <MediaItem key={item.id} item={item} />
    ))}
  </section>
));

export default MediaList;
