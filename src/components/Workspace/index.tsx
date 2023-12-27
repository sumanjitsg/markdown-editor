import { ReactElement, useState } from 'react';

import Markdown from './Markdown';
import Preview from './Preview';
import ShowPreviewButton from './Header/ShowPreviewButton';
import HidePreviewButton from './Header/HidePreviewButton';

type Props = {
    splitter: ReactElement;
};

function Workspace({ splitter }: Props) {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <main className="flex grow">
            {/* Markdown */}
            <div
                className={`${
                    showPreview === true ? 'hidden' : 'w-full lg:w-1/2'
                }`}
            >
                <Markdown
                    viewToggler={
                        <div className="flex flex-col items-center justify-center lg:hidden">
                            <ShowPreviewButton
                                onClickHandler={() => setShowPreview(true)}
                            />
                        </div>
                    }
                />
            </div>

            {/* Splitter */}
            {!showPreview && splitter}

            {/* Preview */}
            <div
                className={`${
                    showPreview === true ? 'w-full' : 'hidden lg:block lg:w-1/2'
                }`}
            >
                <Preview
                    viewToggler={
                        <div className="">
                            <div
                                className={`hidden ${
                                    showPreview === false
                                        ? 'lg:flex lg:flex-col lg:items-center lg:justify-center'
                                        : ''
                                }`}
                            >
                                <ShowPreviewButton
                                    onClickHandler={() => setShowPreview(true)}
                                />
                            </div>

                            <div
                                className={`flex flex-col items-center justify-center ${
                                    showPreview === false ? 'lg:hidden' : ''
                                }`}
                            >
                                <HidePreviewButton
                                    onClickHandler={() => setShowPreview(false)}
                                />
                            </div>
                        </div>
                    }
                />
            </div>
        </main>
    );
}

export default Workspace;
