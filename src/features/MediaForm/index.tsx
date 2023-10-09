import React from "react";
import { observer } from "mobx-react-lite";

import { Input, Divider, Button } from "../../components";

import styles from "./styles.module.scss";
import { useStore } from "AppContext";

interface MediaFormProps {
  item: MediaItem;
  onClose: () => void;
}

const currentYear = new Date().getFullYear();

const MediaForm: React.FC<MediaFormProps> = observer(({ item, onClose }) => {
  const [fields, setFields] = React.useState<Omit<MediaItem, "id">>(() => item);
  const store = useStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (item.title) {
      store.updateMedia({ id: item.id, ...fields });
    } else {
      store.createMedia({ id: item.id, ...fields });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFields((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const removeItem = (): void => {
    store.deleteMedia(item);
  };

  return (
    <article className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Title: "
          type="text"
          name="title"
          value={fields.title}
          required
          autoFocus
          onChange={handleChange}
        />
        <div>
          <Divider />
        </div>
        <Input
          label="Type: "
          type="text"
          name="type"
          value={fields.type}
          required
          onChange={handleChange}
        />
        <Input
          label="Genre: "
          type="text"
          name="genre"
          value={fields.genre}
          required
          onChange={handleChange}
        />
        <Input
          label="Release year: "
          type="number"
          name="releaseYear"
          min={1970}
          max={currentYear}
          value={fields.releaseYear}
          required
          onChange={handleChange}
        />
        <Input
          label="Rating: "
          type="number"
          name="rating"
          min={0}
          max={10}
          value={fields.rating}
          required
          onChange={handleChange}
        />
        <div className={styles.actions}>
          {item.title && (
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          )}
          <Button variant="danger" onClick={removeItem}>
            Delete
          </Button>
          <Button type="submit">{item.title ? "Update" : "Create"}</Button>
        </div>
      </form>
    </article>
  );
});

export default MediaForm;
