// Styles
import { ReactElement, ReactText } from "react";

// Types
type Props = {
  headingText: ReactText;
  viewToggler: ReactElement;
};

function Header({ headingText, viewToggler }: Props) {
  return (
    <header className="flex items-center justify-between py-4 px-3 bg-gray-900 h-11">
      <h2 className="uppercase font-medium leading-none tracking-[.14em] text-gray-400">
        {headingText}
      </h2>

      {viewToggler}
    </header>
  );
}

export default Header;
