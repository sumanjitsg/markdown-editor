import { configureStore } from "@reduxjs/toolkit";
import documentsReducer from "components/documentsSlice";

export const store = configureStore({
  reducer: {
    documents: documentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
