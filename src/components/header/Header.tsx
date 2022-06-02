import { ReactElement } from "react";

import SaveButton from "components/shared/SaveButton";
import { ReactComponent as IconDelete } from "assets/icon-delete.svg";
import DocumentName from "./DocumentName";

// Types
type Props = {
  sidebarToggler: ReactElement;
};

// Component
function Header({ sidebarToggler }: Props) {
  return (
    <header className="flex">
      {sidebarToggler}

      <div className="grow pl-6 pr-2 flex items-center justify-between bg-gray-800">
        <DocumentName />
        <div className="flex items-center gap-x-6">
          <button>
            <IconDelete />
          </button>
          <SaveButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
