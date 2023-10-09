import React from "react";

import { Button, Input } from "../../components";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { useStore } from "AppContext";
import { SupportedMediaTypes } from "api";

const filterTypes = Object.values(SupportedMediaTypes);

const FilterBar: React.FC = observer(() => {
  const store = useStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    store.updateFilters({ ...store.filterBy, search: e.target.value.trim().toLowerCase() });
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    store.updateFilters({ ...store.filterBy, type: e.target.value as SupportedMediaTypes });
  };

  const handleCreateMedia = (): void => {
    store.startCreatingNewMedia();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="search"
        variant="search-input"
        name="mediaSearch"
        placeholder="Start searching a media..."
        aria-label="Search media"
        autoFocus
        onChange={handleChange}
      />
      <div className={styles.searchActions}>
        <Button type="button" onClick={handleCreateMedia}>
          Create new media
        </Button>
        <select aria-label="Change filter by media type" onChange={handleFilterChange}>
          {filterTypes.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </div>
    </form>
  );
});

export default FilterBar;
