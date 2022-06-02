import { ReactComponent as IconDarkMode } from "assets/icon-dark-mode.svg";
import { ReactComponent as IconLightMode } from "assets/icon-light-mode.svg";

type Props = {
  switchOn: boolean;
  onChangeHandler: (value: boolean) => void;
};

function ThemeToggler({ switchOn, onChangeHandler }: Props) {
  return (
    <div className="flex gap-3 items-center">
      <IconDarkMode />
      <label className="w-12 h-6 bg-gray-600 rounded-2xl relative cursor-pointer">
        <input
          className="sr-only"
          type="checkbox"
          name="lightTheme"
          onChange={({ target }) => onChangeHandler(target.checked)}
          checked={switchOn}
          value="active"
        />
        {/* position */}
        <span
          className={`block w-3 h-3 bg-gray-100 rounded-full relative top-1.5 left-1.5 transition-transform duration-75
        ${switchOn === true ? "translate-x-6" : ""}`}
        ></span>
      </label>
      <IconLightMode />
    </div>
  );
}
export default ThemeToggler;
