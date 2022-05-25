import { useState } from 'react';

import Sidebar from './sidebar/Sidebar';
import AppHeader from './header/AppHeader';
import Workspace from './workspace/Workspace';
import Switch from 'components/shared/Switch';
import MenuToggler from 'components/shared/MenuToggler';
import { ReactComponent as IconMenu } from 'assets/icon-menu.svg';
import { ReactComponent as IconClose } from 'assets/icon-close.svg';

function App() {
  const [ lightTheme, setLightTheme ] = useState( false );
  const [ showSideBar, setShowSideBar ] = useState( false );

  return (
    <div
      className={`${lightTheme && 'theme-light'} 
      ${showSideBar && 'translate-x-64'}
      transition-transform`}>
      <Sidebar
        themeToggler={
          <Switch
            checked={lightTheme}
            onChangeHandler={setLightTheme} />
        } />
      <main
        className='flex flex-col min-h-screen'>
        <AppHeader
          sideBarSwitch={
            <MenuToggler
              icon={
                showSideBar === false
                  ? <IconMenu />
                  : <IconClose />
              }
              checked={showSideBar}
              onClickHandler={setShowSideBar}
            />
          }
          text='Markdown' />
        <Workspace />
      </main>
    </div>
  );
}

export default App;
