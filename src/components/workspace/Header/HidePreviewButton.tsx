import { ReactComponent as IconHidePreview } from "assets/icon-hide-preview.svg";

type Props = {
  onClickHandler: () => void;
};

function HidePreviewButton({ onClickHandler }: Props) {
  return (
    <button
      onClick={() => {
        onClickHandler();
      }}
    >
      <IconHidePreview />
    </button>
  );
}
export default HidePreviewButton;
