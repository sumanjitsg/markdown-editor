import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store";
import { data } from "data";

type DocumentMetadata = {
  documentName: string;
  createdOn: string;
};

type DocumentContent = {
  content: string;
};

type Document = DocumentMetadata & DocumentContent;

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
      documentName: data[0].name,
      createdOn: data[0].createdAt,
      content: data[0].content,
    },
    2: {
      documentName: data[1].name,
      createdOn: data[1].createdAt,
      content: data[1].content,
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
        activeId: -1,
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

export const selectActiveDocumentId = ({ documents }: RootState) =>
  documents.activeId;

export const selectDocumentMetadata =
  (id: number) =>
  ({ documents }: RootState) => {
    const { content, ...metadata } = documents.byId[id];
    return metadata;
  };

export const selectActiveDocumentMetadata = ({
  documents,
}: RootState): {
  activeId: number | null;
  metadata: DocumentMetadata | null;
} => {
  const activeId = documents.activeId;

  if (activeId !== -1) {
    const { content, ...metadata } = documents.byId[activeId];
    return { activeId, metadata };
  }

  return { activeId: null, metadata: null };
};

export const selectDocumentContent =
  (id: number) =>
  ({ documents }: RootState) =>
    documents.byId[id].content;

export const selectActiveDocumentContent = (
  state: RootState
): { activeId: number | null; content: string | null } => {
  const activeId = selectActiveDocumentId(state);

  if (activeId !== -1) {
    return { activeId, content: selectDocumentContent(activeId)(state) };
  }

  return { activeId: null, content: null };
};

export const selectAllIdsList = ({ documents }: RootState) => documents.allIds;

export default documentsSlice.reducer;
