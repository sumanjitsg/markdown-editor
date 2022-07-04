import { ReactElement, useState } from "react";

import Sidebar from "components/Sidebar";
import Header from "components/Header";
import ColorThemeSwitch from "components/Sidebar/ColorThemeSwitch";
import SidebarSwitch from "components/Sidebar/SidebarSwitch";

type Props = {
  workspace: ReactElement;
};

function App({ workspace }: Props) {
  const [colorTheme, setColorTheme] = useState<"dark" | "light">("dark");

  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div
      data-testid="app"
      className={`${colorTheme === "light" ? "theme-light" : ""} ${
        sidebarExpanded ? "translate-x-64" : ""
      } transition-transform`}
    >
      {/* sidebar */}
      {/* todo: try switch theme with invert */}
      <Sidebar
        expanded={sidebarExpanded}
        expandSwitch={
          <SidebarSwitch
            expanded={sidebarExpanded}
            onClick={() => {
              setSidebarExpanded((sidebarExpanded) => !sidebarExpanded);
            }}
          />
        }
        colorThemeSwitch={
          <ColorThemeSwitch
            pressed={colorTheme === "light"}
            onToggle={() =>
              setColorTheme((colorTheme) =>
                colorTheme === "dark" ? "light" : "dark"
              )
            }
          />
        }
      />

      <div className="flex flex-col min-h-screen">
        {/* header */}
        <Header />
        {/* workspace */}
        {workspace}
      </div>
    </div>
  );
}

export default App;
