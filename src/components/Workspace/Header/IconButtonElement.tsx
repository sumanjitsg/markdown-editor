import { ComponentPropsWithoutRef } from 'react';
interface ButtonElementProps extends ComponentPropsWithoutRef<'button'> {}

function IconButtonElement({ ...buttonElementProps }: ButtonElementProps) {
    return <button {...buttonElementProps} className="p-1"></button>;
}

export default IconButtonElement;
