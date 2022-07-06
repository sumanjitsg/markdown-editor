import { useSelector } from "react-redux";

import type { RootState } from "store";
import DocumentListItem from "./DocumentListItem";

function DocumentList() {
  // todo: why doclist re-renders on active doc name update?
  const { documentIdList } = useSelector((state: RootState) => state.metadata);

  return (
    <ul aria-labelledby="myDocumentsText" className="mt-6 space-y-6">
      {documentIdList.map((documentId) => (
        <DocumentListItem id={documentId} key={documentId} />
      ))}
    </ul>
  );
}
export default DocumentList;
