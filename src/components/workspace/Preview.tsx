import { ReactElement } from "react";

import Header from "components/workspace/Header";

// Types
type Props = {
  viewToggler: ReactElement;
  content: ReactElement | null;
};

function Preview({ viewToggler, content }: Props) {
  return (
    <section className="flex flex-col min-h-full">
      <Header headingText="Preview" viewToggler={viewToggler} />

      <div className="grow">{content}</div>
    </section>
  );
}

export default Preview;
