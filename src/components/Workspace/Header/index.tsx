import { ReactElement } from 'react';

import styles from 'styles/components/_workspace.module.scss';

// Types
// todo: receive these as children justified between with flex
type Props = {
    headingText: string;
    viewToggle: ReactElement;
};

function Header({ headingText, viewToggle }: Props) {
    return (
        <header
            className={`flex items-center justify-between py-4 pl-3 pr-2 h-11 ${styles.header}`}
        >
            <h2
                className={`uppercase font-medium leading-none tracking-[.14em] ${styles.headingText}`}
            >
                {headingText}
            </h2>

            {viewToggle}
        </header>
    );
}

export default Header;
