import { ReactComponent as IconSave } from "assets/icon-save.svg";
import { blob } from "stream/consumers";

function SaveButton() {
  return (
    <button
      className="bg-orange-400 p-3 rounded"
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
