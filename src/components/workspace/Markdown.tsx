import { ReactElement } from "react";

import Header from "components/workspace/Header";

// Types
type Props = {
  onChangeHandler: (content: string) => void;
  content: string;
  viewToggler: ReactElement;
};

function Markdown({ viewToggler, content, onChangeHandler }: Props) {
  return (
    <section className="flex flex-col min-h-full">
      <Header headingText="Markdown" viewToggler={viewToggler} />

      <textarea
        name="markdown-text"
        className="w-full grow outline-none resize-none p-4 bg-gray-1000 text-gray-400 font-roboto-mono leading-relaxed"
        spellCheck="false"
        value={content}
        onChange={({ target }) => {
          onChangeHandler(target.value);
        }}
      ></textarea>
    </section>
  );
}

export default Markdown;
