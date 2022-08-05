import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store";

type Document = {
  documentName: string;
  createdOn: string;
  content: string;
};

type Documents = {
  byId: {
    [documentId: number]: Document;
  };
  activeId: number;
  allIds: number[];
};

const initialDocuments: Documents = {
  byId: {
    1: {
      documentName: "untitled-document.md",
      createdOn: "01-April-2022",
      content: "",
    },
    2: {
      documentName: "welcome.md",
      createdOn: "01-April-2022",
      content: "",
    },
  },
  activeId: 2,
  allIds: [1, 2],
};

export const documentsSlice = createSlice({
  name: "documents",
  initialState: initialDocuments,
  reducers: {
    createDocument: (documents) => {
      const newDocument: Document = {
        documentName: "untitled-document.md",
        createdOn: Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
          .format(new Date())
          .split(" ")
          .join("-"),
        content: "",
      };

      const newDocumentId =
        documents.allIds[0] !== undefined ? documents.allIds[0] - 1 : 1;

      const documentsbyId = {
        ...documents.byId,
        [newDocumentId]: newDocument,
      };

      const allDocumentIds = [newDocumentId, ...documents.allIds];

      const newDocuments: Documents = {
        ...documents,
        byId: documentsbyId,
        allIds: allDocumentIds,
      };

      return newDocuments;
    },
    updateDocumentName: (
      documents,
      action: {
        payload: {
          documentName: string;
        };
      }
    ) => {
      const newDocuments: Documents = {
        ...documents,
        byId: {
          ...documents.byId,
          [documents.activeId]: {
            ...documents.byId[documents.activeId],
            documentName: action.payload.documentName,
          },
        },
      };

      return newDocuments;
    },
    updateDocumentContent: (
      documents,
      action: {
        payload: {
          content: string;
        };
      }
    ) => {
      const newDocuments: Documents = {
        ...documents,
        byId: {
          ...documents.byId,
          [documents.activeId]: {
            ...documents.byId[documents.activeId],
            content: action.payload.content,
          },
        },
      };

      return newDocuments;
    },
    deleteActiveDocument: (documents) => {
      const { [documents.activeId]: deleted, ...documentsbyId } =
        documents.byId;
      const allDocumentIds = documents.allIds.filter(
        (id) => id !== documents.activeId
      );

      const newDocuments: Documents = {
        ...documents,
        byId: documentsbyId,
        allIds: allDocumentIds,
      };

      return newDocuments;
    },
    changeActiveDocument: (
      documents,
      action: {
        payload: { id: number };
      }
    ) => {
      const newDocuments: Documents = {
        ...documents,
        activeId: action.payload.id,
      };
      return newDocuments;
    },
  },
});

export const {
  createDocument,
  updateDocumentName,
  updateDocumentContent,
  deleteActiveDocument,
  changeActiveDocument,
} = documentsSlice.actions;

export const selectActiveDocumentId = (state: RootState) =>
  state.documents.activeId;

export const selectDocumentMetadata = (id: number) => (state: RootState) => {
  const { content, ...metadata } = state.documents.byId[id];
  return metadata;
};

export const selectDocumentContent = (id: number) => (state: RootState) =>
  state.documents.byId[id].content;

export const selectAllIdsList = (state: RootState) => state.documents.allIds;

export default documentsSlice.reducer;
