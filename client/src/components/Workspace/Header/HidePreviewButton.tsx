import { ComponentPropsWithoutRef } from "react";
import { ReactComponent as IconHidePreview } from "assets/icon-hide-preview.svg";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

type Props = {
  onClickHandler: () => void;
};

function HidePreviewButton({ onClickHandler }: Props) {
  return (
    <IconButton
      aria-label="Hide preview"
      onClick={() => {
        onClickHandler();
      }}
    >
      <IconHidePreview className="fill-gray-500 hover:fill-orange-400" />
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

export default HidePreviewButton;
