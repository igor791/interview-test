import React from "react";

import { MediaStore } from "store/mediaStore";

export const AppContext = React.createContext<MediaStore>({} as MediaStore);
export const AppProvider = AppContext.Provider;

export const useStore = (): MediaStore => React.useContext(AppContext);
