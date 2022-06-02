// Styles
import styles from "./Workspace.module.css";

// Types
type Props = {
  onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>;
};

function TextEditor({ onChangeHandler }: Props) {
  return (
    <textarea
      name="markdown-text"
      className="w-full grow outline-none resize-none p-4 bg-gray-1000 text-gray-400 font-roboto-mono leading-relaxed"
      spellCheck="false"
      onChange={onChangeHandler}
    ></textarea>
  );
}

export default TextEditor;
