import { ChangeEventHandler } from 'react';

type Props = {
  checked: boolean;
  onChangeHandler: ( value: boolean ) => void;
};

function Switch( { checked, onChangeHandler }: Props ) {
  return (
    <label>
      <input
        type="checkbox"
        name="switch"
        onChange={( { target } ) => onChangeHandler( target.checked )}
        checked={checked} />
    </label>
  );
}
export default Switch;