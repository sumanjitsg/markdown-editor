import { ReactComponent as IconDarkMode } from "assets/icon-dark-mode.svg";
import { ReactComponent as IconLightMode } from "assets/icon-light-mode.svg";
import { ReactText } from "react";

type Props = {
  label: string;
  pressed: boolean;
  onToggle: () => void;
};

function ColorThemeSwitch({ label, pressed, onToggle }: Props) {
  return (
    <div className="flex gap-3 items-center">
      <IconDarkMode />
      <button
        aria-label={label}
        aria-pressed={pressed}
        onClick={() => onToggle()}
        className="w-12 h-6 bg-gray-600 rounded-2xl relative"
      >
        <span
          className={`block w-3 h-3 bg-gray-100 rounded-full relative left-1.5 transition-transform duration-75
        ${pressed === true ? "translate-x-6" : ""}`}
        ></span>
      </button>
      <IconLightMode />
    </div>
  );
}
export default ColorThemeSwitch;
