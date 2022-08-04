import { ReactElement } from "react";

import NewDocumentButton from "components/Sidebar/NewDocumentButton";
import DocumentList from "./DocumentList";

type Props = {
  expanded: boolean;
  colorThemeSwitch: ReactElement;
};

function Sidebar({ expanded, colorThemeSwitch }: Props) {
  // todo: focus trapping and focus back to sidebar control button on pressing Esc

  return (
    <aside
      data-testid="sidebar"
      className={`px-6 py-7 bg-gray-900 fixed min-h-full flex flex-col gap-y-2 w-64 -translate-x-64`}
    >
      <div className={`grow ${!expanded ? "invisible" : ""}`}>
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

        <DocumentList />
      </div>

      <div className={!expanded ? "invisible" : ""}>{colorThemeSwitch}</div>
    </aside>
  );
}

export default Sidebar;
