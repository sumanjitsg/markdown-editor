import { configureStore } from "@reduxjs/toolkit";
import metadataReducer from "components/metadataSlice";

export const store = configureStore({
  reducer: {
    metadata: metadataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
