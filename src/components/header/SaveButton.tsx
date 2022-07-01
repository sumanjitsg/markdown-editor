import { ReactComponent as IconSave } from "assets/icon-save.svg";
import styles from "styles/components/Header/SaveButton.module.scss";

function SaveButton() {
  return (
    <button
      aria-label="Download active document"
      className={`w-10 h-10 flex items-center justify-center rounded bg-orange-400 hover:bg-orange-300 focus:bg-orange-300`}
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
      <IconSave />
    </button>
  );
}
export default SaveButton;
