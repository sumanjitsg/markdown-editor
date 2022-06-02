import { MouseEventHandler, ReactElement } from "react";

type Props = {
  icon: ReactElement;
  switchOn: boolean;
  onChangeHandler: (value: boolean) => void;
};

function SidebarToggler({ icon, switchOn, onChangeHandler }: Props) {
  return (
    <label className="bg-gray-700 px-4 py-5 cursor-pointer w-16 h-16 flex items-center justify-center">
      {icon}
      <input
        className="sr-only"
        type="checkbox"
        name="sidebar"
        onChange={({ target }) => onChangeHandler(target.checked)}
        checked={switchOn}
        value="active"
      />
    </label>
  );
}
export default SidebarToggler;
