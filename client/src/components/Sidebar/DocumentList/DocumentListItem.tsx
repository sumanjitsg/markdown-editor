import { useAppDispatch, useAppSelector } from "store/hooks";

import { ReactComponent as IconDocument } from "assets/icon-document.svg";

import {
  changeActiveDocument,
  selectDocumentMetadata,
} from "components/documentsSlice";

type Props = {
  id: number;
};

function DocumentListItem({ id }: Props) {
  const { documentName, createdOn } = useAppSelector(
    selectDocumentMetadata(id)
  );
  const dispatch = useAppDispatch();

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
