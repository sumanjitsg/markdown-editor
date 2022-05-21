import { MouseEventHandler, ReactElement } from 'react';

type Props = {
  icon: ReactElement;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
};

function MenuToggler( { icon, onClickHandler }: Props ) {
  return (
    <button className='scss-bg-gray-700 px-4 py-5' onClick={onClickHandler}>
      {icon}
    </button>
  );
}
export default MenuToggler;