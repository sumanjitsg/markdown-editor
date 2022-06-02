import { ReactElement, useState } from "react";

import Sidebar from "components/sidebar/Sidebar";
import Header from "components/header/Header";
import ThemeToggler from "components/shared/ThemeToggler";
import SidebarToggler from "components/shared/SidebarToggler";
import { ReactComponent as IconMenu } from "assets/icon-menu.svg";
import { ReactComponent as IconClose } from "assets/icon-close.svg";

type Props = {
  workspace: ReactElement;
};

function App({ workspace }: Props) {
  const [lightTheme, setLightTheme] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div
      className={`${lightTheme ? "theme-light" : ""} 
      ${sidebarActive ? "translate-x-64" : ""}
      transition-transform`}
    >
      {/* sidebar */}
      <Sidebar
        toggler={
          <ThemeToggler switchOn={lightTheme} onChangeHandler={setLightTheme} />
        }
      />

      <div className="flex flex-col min-h-screen">
        {/* header */}
        <Header
          toggler={
            <SidebarToggler
              icon={sidebarActive === false ? <IconMenu /> : <IconClose />}
              switchOn={sidebarActive}
              onChangeHandler={setSidebarActive}
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
