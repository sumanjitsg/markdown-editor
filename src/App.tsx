import { ReactElement, useState } from "react";

import Sidebar from "components/Sidebar";
import Header from "components/Header";
import ColorThemeSwitch from "components/Sidebar/ColorThemeSwitch";
import SidebarExpandSwitch from "components/Sidebar/SidebarExpandSwitch";

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
          <SidebarExpandSwitch
            pressed={sidebarExpanded}
            onToggle={() => {
              setSidebarExpanded((sidebarExpanded) => !sidebarExpanded);
            }}
          />
        }
        colorThemeSwitch={
          <ColorThemeSwitch
            label={"Application light color theme"}
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
