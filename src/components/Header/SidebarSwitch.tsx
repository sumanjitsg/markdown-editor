import IconMenu from '@/assets/images/icon-menu.svg?react';
import IconClose from '@/assets/images/icon-close.svg?react';

type Props = {
    expanded: boolean;
    onClick: () => void;
};

function SidebarSwitch({ expanded, onClick }: Props) {
    return (
        // todo: label tooltip
        // todo: convert sidebar toggle button to toggle
        // button( check nvda )
        // todo: need aria-expanded? https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded
        <button
            aria-label="Expand Sidebar"
            aria-expanded={expanded}
            className="bg-gray-700 px-4 py-5 w-16 h-16 flex items-center justify-center hover:bg-orange-400 focus:bg-orange-400"
            onClick={() => {
                onClick();
            }}
        >
            {!expanded ? <IconMenu /> : <IconClose />}
        </button>
    );
}
export default SidebarSwitch;
