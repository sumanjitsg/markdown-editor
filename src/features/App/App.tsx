import { lazy, ReactElement, Suspense, useState } from "react";

import Header from "features/Header";
import SidebarSwitch from "features/Header/SidebarSwitch";

const Sidebar = lazy(() => import("features/Sidebar"));
const ColorThemeSwitch = lazy(
  () => import("features/Sidebar/ColorThemeSwitch")
);

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
      <Suspense fallback={null}>
        <Sidebar
          expanded={sidebarExpanded}
          colorThemeSwitch={
            <Suspense fallback={<div className="h-6"></div>}>
              <ColorThemeSwitch
                pressed={colorTheme === "light"}
                onToggle={() =>
                  setColorTheme((colorTheme) =>
                    colorTheme === "dark" ? "light" : "dark"
                  )
                }
              />
            </Suspense>
          }
        />
      </Suspense>

      <div className="flex flex-col min-h-screen">
        {/* header */}
        <Header
          sidebarExpandSwitch={
            <SidebarSwitch
              expanded={sidebarExpanded}
              onClick={() => {
                setSidebarExpanded((sidebarExpanded) => !sidebarExpanded);
              }}
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
