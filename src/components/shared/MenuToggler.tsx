import { MouseEventHandler, ReactElement } from 'react';

type Props = {
  icon: ReactElement;
  checked: boolean;
  onClickHandler: ( value: boolean ) => void;
};

function MenuToggler( { icon, checked, onClickHandler }: Props ) {
  return (
    <label className='bg-gray-700 px-4 py-5 cursor-pointer w-16 h-16 flex items-center justify-center'>
      {icon}
      <input
        className='hidden'
        type="checkbox"
        name=""
        onChange={( { target } ) => onClickHandler( target.checked )}
        checked={checked}
      />
    </label>
  );
}
export default MenuToggler;