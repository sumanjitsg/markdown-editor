import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  documentMap: {
    [documentId: number]: { documentName: string; createdOn: string };
  };
  activeDocumentId: number;
  documentIdList: number[];
};

const initialState: State = {
  documentMap: {
    1: {
      documentName: "untitled-document.md",
      createdOn: "01-April-2022",
    },
    2: {
      documentName: "welcome.md",
      createdOn: "01-April-2022",
    },
  },
  activeDocumentId: 2,
  documentIdList: [1, 2],
};

export const metadataSlice = createSlice({
  name: "metadata",
  initialState: initialState,
  reducers: {
    updateDocumentMetadata: (
      state,
      action: {
        payload: {
          id: number;
          // todo: define data type above, used in state type as well
          data: { documentName: string; createdOn: string };
        };
      }
    ) => {
      // if document id exists
      if (state.documentMap[action.payload.id] !== undefined) {
        return {
          ...state,
          documentMap: {
            ...state.documentMap,
            [action.payload.id]: action.payload.data,
          },
        };
      } else {
        return state;
      }
    },
    deleteDocument: (state, action: { payload: { id: number } }) => {
      const { [action.payload.id]: deletedDocument, ...documentMap } =
        state.documentMap;

      return {
        ...state,
        documentMap: documentMap,
        documentIdList: state.documentIdList.filter(
          (id) => id !== action.payload.id
        ),
      };
    },
    changeActiveDocument: (state, action: { payload: { id: number } }) => {
      return { ...state, activeDocumentId: action.payload.id };
    },
  },
});

export const { updateDocumentMetadata, deleteDocument, changeActiveDocument } =
  metadataSlice.actions;
export default metadataSlice.reducer;
