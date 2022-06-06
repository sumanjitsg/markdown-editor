import { ReactElement } from "react";

import { ReactComponent as IconDocument } from "assets/icon-document.svg";
import NewDocumentButton from "components/shared/NewDocumentButton";

type Props = {
  themeToggler: ReactElement;
};

function Sidebar({ themeToggler }: Props) {
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

        <div className="mt-6">
          <div className="flex items-center gap-x-4">
            <IconDocument className="shrink-0" />
            <div>
              <h3 className="font-light text-13px leading-tight text-gray-500">
                01 April 2022
              </h3>
              <p className="mt-1 text-15px leading-tight">
                untitled-document.md
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-x-4">
              <IconDocument className="shrink-0" />
              <div>
                <h3 className="font-light text-13px leading-tight text-gray-500">
                  01 April 2022
                </h3>
                <p className="mt-1 text-15px leading-tight">welcome.md</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {themeToggler}
    </aside>
  );
}

export default Sidebar;
