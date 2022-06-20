import { ReactComponent as IconMenu } from "assets/icon-menu.svg";
import { ReactComponent as IconClose } from "assets/icon-close.svg";

type Props = {
  sidebarExpanded: boolean;
  toggleExpandedState: () => void;
};

function SidebarToggler({ sidebarExpanded, toggleExpandedState }: Props) {
  return (
    // todo: label tooltip
    <button
      aria-label="Expand Sidebar"
      aria-expanded={sidebarExpanded ? "true" : "false"}
      className="bg-gray-700 px-4 py-5 w-16 h-16 flex items-center justify-center hover:bg-orange-400 focus:bg-orange-400 focus:outline-white"
      onClick={() => {
        toggleExpandedState();
      }}
    >
      {sidebarExpanded === false ? <IconMenu /> : <IconClose />}
    </button>
  );
}
export default SidebarToggler;
