import { Observable, of, delay, map, share, mergeMap, iif } from "rxjs";
import mockMediaList from "./mockMedias.json";

export enum SupportedMediaTypes {
  All = "all",
  Movie = "movie",
  TVShows = "tv-show",
  Game = "game",
}

export const SuppopertMediaTypesList = Object.values(SupportedMediaTypes);

export interface FilterBy {
  type: SupportedMediaTypes;
  search: string;
}

let mediaList: MediaItem[] = mockMediaList;

export class API {
  createMedia$(item: MediaItem): Observable<MediaItem[]> {
    return of(item).pipe(
      delay(500),
      map(() => {
        mediaList.push(item);
        return mediaList;
      }),
      share(),
    );
  }

  readMedias$(filterBy: FilterBy): Observable<MediaItem[]> {
    return of(filterBy).pipe(
      delay(500),
      map(() => {
        mediaList = mediaList.filter(({ type }) =>
          SuppopertMediaTypesList.includes(type as SupportedMediaTypes),
        );
        return mediaList;
      }),
      mergeMap((list) =>
        iif(
          () => filterBy.type === SupportedMediaTypes.All,
          of(list),
          of(list.filter(({ type }) => filterBy.type === type)),
        ),
      ),
      mergeMap((list) =>
        iif(
          () => !!filterBy.search,
          of(list.filter(({ title }) => title.toLowerCase().includes(filterBy.search))),
          of(list),
        ),
      ),
      share(),
    );
  }

  updateMedia$(item: MediaItem): Observable<MediaItem[]> {
    return of(item).pipe(
      delay(500),
      map(() => {
        mediaList = mediaList.map((currentItem) => {
          if (currentItem.id === item.id) return { ...currentItem, ...item };
          return currentItem;
        });

        return mediaList;
      }),
      share(),
    );
  }

  deleteMedia$(item: MediaItem): Observable<MediaItem[]> {
    return of(item).pipe(
      delay(500),
      map(() => {
        mediaList = mediaList.filter(({ id }) => id !== item.id);
        return mediaList;
      }),
      share(),
    );
  }
}

export default new API();
