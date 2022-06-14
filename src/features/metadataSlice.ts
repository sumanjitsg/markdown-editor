import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const metadataSlice = createSlice({
  name: "metadata",
  initialState: {
    filename: "untitled-document",
    createdOn: "01-April-2022",
  },
  reducers: {
    setFileName: (state, action: PayloadAction<string>) => {
      state.filename = action.payload;
    },
  },
});

export const { setFileName } = metadataSlice.actions;
export default metadataSlice.reducer;
