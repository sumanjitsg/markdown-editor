import { useAppSelector } from "store/hooks";

import DocumentListItem from "./DocumentListItem";
import { selectAllIdsList } from "components/documentsSlice";

function DocumentList() {
  // todo: why doclist re-renders on active doc name update?
  const documentIdList = useAppSelector(selectAllIdsList);

  return (
    <ul aria-labelledby="myDocumentsText" className="mt-6 space-y-6">
      {documentIdList.map((documentId) => (
        <DocumentListItem id={documentId} key={documentId} />
      ))}
    </ul>
  );
}
export default DocumentList;
