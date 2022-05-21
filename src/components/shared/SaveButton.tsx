import { ReactComponent as IconSave } from 'assets/icon-save.svg';

function SaveButton() {
  return (
    <button
      className='scss-bg-orange-400 p-3 rounded min-w-max text-15px leading-tight'
      onClick={() => {}}>
      <IconSave />
    </button>
  );
}
export default SaveButton;