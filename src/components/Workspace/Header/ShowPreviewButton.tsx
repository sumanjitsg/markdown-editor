import IconButtonElement from "./IconButtonElement";
import { ReactComponent as IconShowPreview } from "assets/icon-show-preview.svg";

type Props = {
  onClickHandler: () => void;
};

function ShowPreviewButton({ onClickHandler }: Props) {
  return (
    <IconButtonElement
      aria-label="Show preview"
      onClick={() => {
        onClickHandler();
      }}
    >
      <IconShowPreview className="fill-gray-500 hover:fill-orange-400" />
    </IconButtonElement>
  );
}

export default ShowPreviewButton;
