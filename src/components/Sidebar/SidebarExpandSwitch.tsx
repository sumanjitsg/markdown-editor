import { ReactComponent as IconMenu } from "assets/icon-menu.svg";
import { ReactComponent as IconClose } from "assets/icon-close.svg";

type Props = {
  pressed: boolean;
  onToggle: () => void;
};

function SidebarSwitch({ pressed, onToggle }: Props) {
  return (
    // todo: label tooltip
    // todo: convert sidebar toggle button to toggle
    // button( check nvda )
    <button
      aria-label="My Documents Sidebar"
      aria-pressed={pressed}
      className="bg-gray-700 px-4 py-5 w-16 h-16 flex items-center justify-center hover:bg-orange-400 focus:bg-orange-400"
      onClick={() => {
        onToggle();
      }}
    >
      {!pressed ? <IconMenu /> : <IconClose />}
    </button>
  );
}
export default SidebarSwitch;
