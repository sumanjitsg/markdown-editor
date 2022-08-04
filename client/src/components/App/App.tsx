import { lazy, ReactElement, Suspense, useState, useEffect } from "react";

import Header from "components/Header";
import SidebarSwitch from "components/Header/SidebarSwitch";

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

  // todo: isLoaded to prevent redundant fetch on initial re-renders
  useEffect(() => {
    fetch("http://localhost:3000/documents")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

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
