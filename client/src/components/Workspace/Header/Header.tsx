import { ReactElement, ReactText } from "react";

import styles from "styles/components/_workspace.module.scss";

// Types
type Props = {
  headingText: ReactText;
  viewToggler: ReactElement;
};

function Header({ headingText, viewToggler }: Props) {
  return (
    <header
      className={`flex items-center justify-between py-4 pl-3 pr-2 h-11 ${styles.header}`}
    >
      <h2
        className={`uppercase font-medium leading-none tracking-[.14em] ${styles.headingText}`}
      >
        {headingText}
      </h2>

      {viewToggler}
    </header>
  );
}

export default Header;
