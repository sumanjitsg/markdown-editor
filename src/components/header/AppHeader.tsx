import { useState } from 'react';

import MenuToggler from 'components/shared/MenuToggler';
import SaveButton from 'components/shared/SaveButton';
import { ReactComponent as IconMenu } from 'assets/icon-menu.svg';
import { ReactComponent as IconClose } from 'assets/icon-close.svg';
import { ReactComponent as IconDelete } from 'assets/icon-delete.svg';
import DocumentName from './DocumentName';

// Types
type Props = {
  text: string;
};

type BtnMouseEventHandler = React.MouseEventHandler<HTMLButtonElement>;

// Component
function AppHeader( { text }: Props ) {
  const [ isMenuOpen, setIsMenuOpen ] = useState( false );

  const handleSave: BtnMouseEventHandler
    = () => {};

  return (
    <header
      className='flex scss-bg-gray-800'>
      <MenuToggler
        icon={isMenuOpen ? <IconClose /> : <IconMenu />}
        onClickHandler={() => {}}
      />
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