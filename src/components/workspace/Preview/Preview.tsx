import { ReactElement } from "react";

import Header from "components/Workspace/Header";

import styles from "styles/components/_workspace.module.scss";

// Types
type Props = {
  viewToggler: ReactElement;
  content?: ReactElement | null;
};

function Preview({ viewToggler, content }: Props) {
  return (
    <section className="flex flex-col min-h-full">
      <Header headingText="Preview" viewToggler={viewToggler} />

      <div className={`grow scrollbar-stable ${styles.workspace}`}>
        {content}
      </div>
    </section>
  );
}

export default Preview;
