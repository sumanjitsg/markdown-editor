import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as IconDocument } from "assets/icon-document.svg";

import {
  changeActiveDocument,
  selectDocumentMetadata,
} from "components/documentsSlice";

type Props = {
  id: number;
};

function DocumentListItem({ id }: Props) {
  const { documentName, createdOn } = useSelector(selectDocumentMetadata(id));
  const dispatch = useDispatch();

  return (
    <li className="flex items-center gap-x-4">
      <IconDocument className="shrink-0" />
      <div>
        <p className="font-light text-13px leading-tight text-gray-500">
          {createdOn}
        </p>
        <button
          className="mt-1 text-15px leading-tight"
          onClick={() => dispatch(changeActiveDocument({ id: id }))}
        >
          {documentName}
        </button>
      </div>
    </li>
  );
}
export default DocumentListItem;
