import { ReactComponent as IconHidePreview } from "assets/icon-hide-preview.svg";

type Props = {
  onClickHandler: () => void;
};

function HidePreviewButton({ onClickHandler }: Props) {
  return (
    <button
      aria-label="Hide preview"
      className="p-1"
      onClick={() => {
        onClickHandler();
      }}
    >
      <IconHidePreview className="fill-gray-500 hover:fill-orange-400" />
    </button>
  );
}
export default HidePreviewButton;
