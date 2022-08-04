import { ComponentPropsWithoutRef } from "react";
interface ButtonElementProps extends ComponentPropsWithoutRef<"button"> {}

function IconButtonElement({
  children,
  ...buttonElementProps
}: ButtonElementProps) {
  return (
    <button className="p-1" {...buttonElementProps}>
      {children}
    </button>
  );
}

export default IconButtonElement;
