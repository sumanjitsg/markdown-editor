import { ChangeEventHandler, ReactElement } from "react";

// Components
import SectionHeader from "./SectionHeader";
import TextEditor from "./TextEditor";
import { ReactComponent as IconShowPreview } from "assets/icon-show-preview.svg";

// Types
type Props = {
  onChangeHandler: ChangeEventHandler<HTMLTextAreaElement>;
  showPreview: ReactElement;
  showPreviewState: boolean;
};

function EditorSection({
  showPreviewState,
  showPreview,
  onChangeHandler,
}: Props) {
  return (
    <section
      className={`${
        showPreviewState ? "w-0" : "w-full lg:w-1/2"
      } flex flex-col`}
    >
      <SectionHeader text="Markdown" showPreview={showPreview} />
      <TextEditor onChangeHandler={onChangeHandler} />
    </section>
  );
}

export default EditorSection;
