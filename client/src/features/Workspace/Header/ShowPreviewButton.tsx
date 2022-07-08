import { ReactComponent as IconShowPreview } from "assets/icon-show-preview.svg";

type Props = {
  onClickHandler: () => void;
};

function ShowPreviewButton({ onClickHandler }: Props) {
  return (
    <button
      aria-label="Show preview"
      className="p-1"
      onClick={() => {
        onClickHandler();
      }}
    >
      <IconShowPreview className="fill-gray-500 hover:fill-orange-400" />
    </button>
  );
}
export default ShowPreviewButton;
