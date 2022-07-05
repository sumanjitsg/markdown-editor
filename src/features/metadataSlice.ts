import { createSlice } from "@reduxjs/toolkit";

type State = {
  documentMap: {
    [documentId: number]: { documentName: string; createdOn: string };
  };
  documentContentMap: {
    [documentId: number]: string;
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
  documentContentMap: {
    1: "",
    2: "",
  },
  activeDocumentId: 2,
  documentIdList: [1, 2],
};

export const metadataSlice = createSlice({
  name: "metadata",
  initialState: initialState,
  reducers: {
    createDocument: (state) => {
      const newDocument: { documentName: string; createdOn: string } = {
        documentName: "untitled-document.md",
        createdOn: Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
          .format(new Date())
          .split(" ")
          .join("-"),
      };

      const newDocumentId =
        state.documentIdList[0] !== undefined ? state.documentIdList[0] - 1 : 1;

      const newDocumentMap = {
        ...state.documentMap,
        [newDocumentId]: newDocument,
      };

      const newDocumentContentMap = {
        ...state.documentContentMap,
        [newDocumentId]: "",
      };

      const newDocumentIdList = [newDocumentId, ...state.documentIdList];

      return {
        ...state,
        documentMap: newDocumentMap,
        documentContentMap: newDocumentContentMap,
        documentIdList: newDocumentIdList,
      };
    },
    updateDocumentName: (
      state,
      action: {
        payload: {
          // todo: define data type above, used in state type as well
          documentName: string;
        };
      }
    ) => {
      return {
        ...state,
        documentMap: {
          ...state.documentMap,
          [state.activeDocumentId]: {
            ...state.documentMap[state.activeDocumentId],
            documentName: action.payload.documentName,
          },
        },
      };
    },
    updateDocumentContent: (
      state,
      action: {
        payload: {
          content: string;
        };
      }
    ) => {
      return {
        ...state,
        documentContentMap: {
          ...state.documentContentMap,
          [state.activeDocumentId]: action.payload.content,
        },
      };
    },
    deleteActiveDocument: (state) => {
      const { [state.activeDocumentId]: deletedDocument, ...newDocumentMap } =
        state.documentMap;

      const {
        [state.activeDocumentId]: deletedDocumentContent,
        ...newDocumentContentMap
      } = state.documentContentMap;

      return {
        ...state,
        documentMap: newDocumentMap,
        documentContentMap: newDocumentContentMap,
        documentIdList: state.documentIdList.filter(
          (id) => id !== state.activeDocumentId
        ),
      };
    },
    changeActiveDocument: (state, action: { payload: { id: number } }) => {
      return { ...state, activeDocumentId: action.payload.id };
    },
  },
});

export const {
  createDocument,
  updateDocumentName,
  updateDocumentContent,
  deleteActiveDocument,
  changeActiveDocument,
} = metadataSlice.actions;
export default metadataSlice.reducer;
