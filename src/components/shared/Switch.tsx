import { ChangeEventHandler } from 'react';

type Props = {
  checked: boolean;
  onChangeHandler: ( value: boolean ) => void;
};

function Switch( { checked, onChangeHandler }: Props ) {
  return (
    <label className='w-12 h-6 bg-gray-600 rounded-2xl relative cursor-pointer'>
      <input
        className='sr-only'
        type="checkbox"
        name="switch"
        onChange={( { target } ) => onChangeHandler( target.checked )}
        checked={checked}
      />
      <span
        className={`block w-3 h-3 bg-gray-100 rounded-full relative top-1.5 left-1.5 transition-transform 
        ${checked === true && 'translate-x-6'}`}>
      </span>
    </label>
  );
}
export default Switch;