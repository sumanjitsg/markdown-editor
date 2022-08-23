import { useAppSelector } from "store/hooks";
import { selectActiveDocumentId } from "store/documentsSlice";

import { ReactComponent as IconSave } from "assets/icon-save.svg";

import styles from "styles/components/Header/IconSave.module.scss";

function SaveButton() {
  const activeId = useAppSelector(selectActiveDocumentId);

  return (
    <button
      disabled={activeId === -1}
      aria-label="Download active document"
      className={`w-10 h-10 flex items-center justify-center rounded bg-orange-400 hover:bg-orange-300 focus:bg-orange-300 disabled:bg-gray-600`}
      onClick={() => {
        const text = "# test text";
        // text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
        const blob = new Blob([text], { type: "text/plain" });
        const anchor = document.createElement("a");
        anchor.download = "test.md";
        anchor.href = window.URL.createObjectURL(blob);
        anchor.target = "_blank";
        anchor.style.display = "none"; // just to be safe!
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      }}
    >
      <IconSave className={styles.iconSave} />
    </button>
  );
}
export default SaveButton;
