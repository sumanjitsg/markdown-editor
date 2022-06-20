import { ReactElement, useState } from "react";

import Sidebar from "components/Sidebar";
import Header from "components/Header";
import ThemeToggler from "components/shared/ThemeToggler";
import SidebarToggler from "components/shared/SidebarToggler";

type Props = {
  workspace: ReactElement;
};

function App({ workspace }: Props) {
  const [lightTheme, setLightTheme] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div
      className={`${lightTheme ? "theme-light" : ""} ${
        sidebarExpanded ? "translate-x-64" : ""
      } transition-transform`}
    >
      {/* sidebar */}
      <Sidebar
        themeToggler={
          <ThemeToggler switchOn={lightTheme} onChangeHandler={setLightTheme} />
        }
      />

      <div className="flex flex-col min-h-screen">
        {/* header */}
        <Header
          sidebarToggler={
            <SidebarToggler
              sidebarExpanded={sidebarExpanded}
              toggleExpandedState={() =>
                setSidebarExpanded((sidebarExpanded) => !sidebarExpanded)
              }
            />
          }
        />

        {/* workspace */}
        {workspace}
      </div>
    </div>
  );
}

export default App;
