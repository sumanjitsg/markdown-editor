import IconButtonElement from './IconButtonElement';
import { ReactComponent as IconHidePreview } from 'assets/icon-hide-preview.svg';

type Props = {
    onClickHandler: () => void;
};

function HidePreviewButton({ onClickHandler }: Props) {
    return (
        <IconButtonElement
            aria-label="Hide preview"
            onClick={() => {
                onClickHandler();
            }}
        >
            <IconHidePreview className="fill-gray-500 hover:fill-orange-400" />
        </IconButtonElement>
    );
}

export default HidePreviewButton;
