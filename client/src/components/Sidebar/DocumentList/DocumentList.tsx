import { useSelector } from "react-redux";

import DocumentListItem from "./DocumentListItem";
import { selectAllIdsList } from "components/documentsSlice";

function DocumentList() {
  // todo: why doclist re-renders on active doc name update?
  const documentIdList = useSelector(selectAllIdsList);

  return (
    <ul aria-labelledby="myDocumentsText" className="mt-6 space-y-6">
      {documentIdList.map((documentId) => (
        <DocumentListItem id={documentId} key={documentId} />
      ))}
    </ul>
  );
}
export default DocumentList;
