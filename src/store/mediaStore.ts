import { makeAutoObservable } from "mobx";

import { SupportedMediaTypes, type API, type FilterBy } from "../api";

export class MediaStore {
  isLoading: boolean = true;
  mediaList: MediaItem[] = [];
  api: API;
  filterBy: FilterBy = {
    type: SupportedMediaTypes.All,
    search: "",
  };

  constructor(api: API) {
    makeAutoObservable(this);
    this.api = api;
  }

  startCreatingNewMedia(): void {
    const newItem = new Item({
      title: "",
      type: "",
      genre: "",
      releaseYear: new Date().getFullYear(),
      rating: 0,
    });
    this.mediaList = [newItem, ...this.mediaList];
  }

  createMedia(item: MediaItem): void {
    this.isLoading = true;
    this.api.createMedia$(item).subscribe((mediaList) => {
      this.mediaList = mediaList;
      this.isLoading = false;
    });
  }

  readMedias(): void {
    this.isLoading = true;
    this.api.readMedias$(this.filterBy).subscribe((data) => {
      this.mediaList = data;
      this.isLoading = false;
    });
  }

  updateMedia(item: MediaItem): void {
    this.isLoading = true;
    this.api.updateMedia$(item).subscribe((mediaList) => {
      this.mediaList = mediaList;
      this.isLoading = false;
    });
  }

  deleteMedia(item: MediaItem): void {
    if (item.title) {
      this.isLoading = true;
      this.api.deleteMedia$(item).subscribe((mediaList) => {
        this.mediaList = mediaList;
        this.isLoading = false;
      });
    } else {
      this.mediaList = this.mediaList.filter(({ id }) => id !== item.id);
    }
  }

  updateFilters(filterBy: FilterBy): void {
    this.filterBy = filterBy;
    this.readMedias();
  }
}

class Item {
  id: number = 0;
  title: string = "";
  type: string = "";
  genre: string = "";
  releaseYear: number = 0;
  rating: number = 0;

  constructor(item: Omit<MediaItem, "id">) {
    this.id = Date.now();
    this.title = item.title;
    this.type = item.type;
    this.genre = item.genre;
    this.releaseYear = item.releaseYear;
    this.rating = item.rating;
  }
}
