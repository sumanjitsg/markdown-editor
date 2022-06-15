import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as IconDocument } from "assets/icon-document.svg";
import NewDocumentButton from "components/shared/NewDocumentButton";

import type { RootState } from "store";
import { changeActiveDocument } from "features/metadataSlice";

type Props = {
  themeToggler: ReactElement;
};

function Sidebar({ themeToggler }: Props) {
  const { documentMap, documentIdList } = useSelector(
    (state: RootState) => state.metadata
  );
  const dispatch = useDispatch();

  return (
    <aside className="px-6 py-7 bg-gray-900 fixed min-h-full flex flex-col w-64 -translate-x-64">
      <div className="grow">
        <h1 className="uppercase font-commissioner font-bold text-15px leading-tight tracking-[.33em]">
          Markdown
        </h1>

        <h2 className="uppercase font-roboto font-medium leading-tight text-gray-500 mt-7">
          My Documents
        </h2>

        <div className="mt-7">
          <NewDocumentButton />
        </div>

        <ul className="mt-6 space-y-6">
          {documentIdList.map((documentId) => (
            <li className="flex items-center gap-x-4" key={documentId}>
              <IconDocument className="shrink-0" />
              <div>
                <h3 className="font-light text-13px leading-tight text-gray-500">
                  {documentMap[documentId]?.createdOn}
                </h3>
                <button
                  className="mt-1 text-15px leading-tight"
                  onClick={() =>
                    dispatch(changeActiveDocument({ id: documentId }))
                  }
                >
                  {documentMap[documentId]?.documentName}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {themeToggler}
    </aside>
  );
}

export default Sidebar;
