import { ComponentPropsWithoutRef } from "react";
import { ReactComponent as IconShowPreview } from "assets/icon-show-preview.svg";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

type Props = {
  onClickHandler: () => void;
};

function ShowPreviewButton({ onClickHandler }: Props) {
  return (
    <IconButton
      aria-label="Show preview"
      onClick={() => {
        onClickHandler();
      }}
    >
      <IconShowPreview className="fill-gray-500 hover:fill-orange-400" />
    </IconButton>
  );
}

function IconButton({ ...props }: ButtonProps) {
  return (
    <button className="p-1" {...props}>
      {props.children}
    </button>
  );
}

export default ShowPreviewButton;
