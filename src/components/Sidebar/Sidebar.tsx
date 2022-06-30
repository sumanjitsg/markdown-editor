import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as IconDocument } from "assets/icon-document.svg";
import NewDocumentButton from "components/shared/NewDocumentButton";

import type { RootState } from "store";
import { changeActiveDocument } from "features/metadataSlice";

type Props = {
  expanded: boolean;
  themeSwitch: ReactElement;
};

function Sidebar({ expanded, themeSwitch }: Props) {
  const { documentMap, documentIdList } = useSelector(
    (state: RootState) => state.metadata
  );
  const dispatch = useDispatch();

  // todo: focus trapping and focus back to sidebar control button on pressing Esc

  return (
    <aside
      data-testid="sidebar"
      className={`px-6 py-7 bg-gray-900 fixed min-h-full flex flex-col w-64 -translate-x-64 ${
        !expanded ? "invisible" : ""
      }`}
      // style={!expanded ? {visibility: 'hidden'}: undefined}
    >
      <div className="grow">
        <h1 className="uppercase font-commissioner font-bold text-15px leading-tight tracking-[.33em]">
          Markdown
        </h1>

        <h2
          id="myDocumentsText"
          className="uppercase font-roboto font-medium leading-tight text-gray-500 mt-7"
        >
          My Documents
        </h2>

        <div className="mt-7">
          <NewDocumentButton focused={expanded} />
        </div>

        <ul aria-labelledby="myDocumentsText" className="mt-6 space-y-6">
          {documentIdList.map((documentId) => (
            <li className="flex items-center gap-x-4" key={documentId}>
              <IconDocument className="shrink-0" />
              <div>
                <p className="font-light text-13px leading-tight text-gray-500">
                  {documentMap[documentId]?.createdOn}
                </p>
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

      {themeSwitch}
    </aside>
  );
}

export default Sidebar;
