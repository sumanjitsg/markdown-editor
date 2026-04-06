import IconShowPreview from '@/assets/images/icon-show-preview.svg?react';
import IconButtonElement from './IconButtonElement';

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
