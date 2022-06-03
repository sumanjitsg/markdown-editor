import { ReactComponent as IconShowPreview } from "assets/icon-show-preview.svg";

type Props = {
  onClickHandler: () => void;
};

function ShowPreviewButton({ onClickHandler }: Props) {
  return (
    <button
      onClick={() => {
        onClickHandler();
      }}
    >
      <IconShowPreview />
    </button>
  );
}
export default ShowPreviewButton;
