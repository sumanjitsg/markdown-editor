import type { ComponentPropsWithoutRef } from 'react';
interface ButtonElementProps extends ComponentPropsWithoutRef<'button'> {}

function IconButtonElement({ ...buttonElementProps }: ButtonElementProps) {
    return <button type="button" {...buttonElementProps} className="p-1" />;
}

export default IconButtonElement;
