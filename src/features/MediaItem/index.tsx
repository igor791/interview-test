import React from "react";

import { Heading, Divider, Button } from "../../components";

import styles from "./styles.module.scss";
import MediaForm from "features/MediaForm";

export interface MediaItemProps {
  item: MediaItem;
}

const MediaItem: React.FC<MediaItemProps> = ({ item }) => {
  const [isEdit, setIsEdit] = React.useState(false);

  const openEditMode = (): void => {
    setIsEdit(true);
  };

  const closeEditMode = (): void => {
    setIsEdit(false);
  };

  if (isEdit || !item.title) return <MediaForm item={item} onClose={closeEditMode} />;

  return (
    <article className={styles.container}>
      <div className={styles.panel}>
        <Heading size="h2">{item.title}</Heading>
        <Button variant="secondary" onClick={openEditMode}>
          Edit
        </Button>
      </div>
      <Divider />
      <ul className={styles.info}>
        <li>
          <strong>Type: </strong> {item.type}
        </li>
        <li>
          <strong>Genre: </strong> {item.genre}
        </li>
        <li>
          <strong>Release year: </strong> {item.releaseYear}
        </li>
        <li>
          <strong>Rating: </strong> {item.rating}/10
        </li>
      </ul>
    </article>
  );
};

export default MediaItem;
