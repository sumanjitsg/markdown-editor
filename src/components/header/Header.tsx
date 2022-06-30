import { ReactElement } from "react";

import DocumentName from "./DocumentName";
import DeleteButton from "./DeleteButton";
import SaveButton from "components/Header/SaveButton";

// Types
type Props = {
  sidebarToggle: ReactElement;
};

// Component
function Header({ sidebarToggle }: Props) {
  return (
    <header className="flex">
      {/* todo: convert sidebar toggle button to toggle button (check nvda) */}
      {sidebarToggle}

      <div className="grow pl-6 pr-2 flex items-center justify-between bg-gray-800">
        {/* active document name */}
        <DocumentName />

        <div className="flex items-center gap-x-4">
          {/* delete document button */}
          {/* todo: change active doc on delete, if last document, do something */}
          <DeleteButton />

          {/* save document button */}
          <SaveButton onClick={() => {}} />
        </div>
      </div>
    </header>
  );
}

export default Header;
