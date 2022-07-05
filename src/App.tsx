import { lazy, ReactElement, Suspense, useState } from "react";

import Header from "components/Header";
import SidebarSwitch from "components/Sidebar/SidebarSwitch";

const Sidebar = lazy(() => import("components/Sidebar"));
const ColorThemeSwitch = lazy(
  () => import("components/Sidebar/ColorThemeSwitch")
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
          expandSwitch={
            <SidebarSwitch
              expanded={sidebarExpanded}
              onClick={() => {
                setSidebarExpanded((sidebarExpanded) => !sidebarExpanded);
              }}
            />
          }
          colorThemeSwitch={
            <Suspense fallback={null}>
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
        <Header />
        {/* workspace */}
        {workspace}
      </div>
    </div>
  );
}

export default App;
