import { ReactElement, useState } from "react";

import Sidebar from "components/Sidebar";
import Header from "components/Header";
import ThemeSwitch from "components/shared/ThemeSwitch";
import SidebarToggler from "components/shared/SidebarToggler";

type Props = {
  workspace: ReactElement;
};

function App({ workspace }: Props) {
  const [lightTheme, setLightTheme] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div
      data-testid="app"
      className={`${lightTheme ? "theme-light" : ""} ${
        sidebarExpanded ? "translate-x-64" : ""
      } transition-transform`}
    >
      {/* sidebar */}
      {/* todo: try switch theme with invert */}
      <Sidebar
        expanded={sidebarExpanded}
        themeSwitch={
          <ThemeSwitch
            label={"Application light color theme"}
            pressed={lightTheme}
            tabbable={sidebarExpanded}
            onToggleHandler={() => setLightTheme((lightTheme) => !lightTheme)}
          />
        }
      />

      <div className="flex flex-col min-h-screen">
        {/* header */}
        <Header
          sidebarToggler={
            <SidebarToggler
              sidebarExpanded={sidebarExpanded}
              toggleExpandedState={() =>
                setSidebarExpanded((sidebarExpanded) => {
                  if (sidebarExpanded === false) {
                  }
                  return !sidebarExpanded;
                })
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
