import { ReactElement, useState } from 'react';


import SaveButton from 'components/shared/SaveButton';
import { ReactComponent as IconDelete } from 'assets/icon-delete.svg';
import DocumentName from './DocumentName';

// Types
type Props = {
  text: string;
  sideBarSwitch: ReactElement;
};

// Component
function AppHeader( { text, sideBarSwitch }: Props ) {
  return (
    <header
      className='flex bg-gray-800'>
      {sideBarSwitch}
      <div
        className='grow ml-6 mr-2 flex items-center justify-between'>
        <DocumentName />
        <div
          className='flex items-center gap-x-6'>
          <button>
            <IconDelete />
          </button>
          <SaveButton />
        </div>
      </div>
    </header>
  );
}

export default AppHeader;