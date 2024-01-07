import {
    ReactElement,
    useState,
    useEffect,
    ComponentPropsWithoutRef,
} from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import Header from '@/components/Workspace/Header';

import styles from '@/styles/components/_workspace.module.scss';
import {
    selectActiveDocumentContent,
    updateDocumentContent,
} from '@/store/documentsSlice';

// Types
type Props = {
    viewToggler: ReactElement;
};

function Markdown({ viewToggler }: Props) {
    const { activeId, content } = useAppSelector(selectActiveDocumentContent);

    const dispatch = useAppDispatch();

    const [textAreaValue, setTextAreaValue] = useState(content ?? undefined);

    useEffect(() => {
        setTextAreaValue(content ?? '');
    }, [content]);

    return (
        <section className={'flex flex-col min-h-full'}>
            <Header headingText="Markdown" viewToggle={viewToggler} />
            <TextAreaElement
                disabled={activeId === null}
                aria-label="Markdown editor"
                spellCheck="false"
                value={textAreaValue}
                onChange={event => {
                    setTextAreaValue(event.currentTarget.value);
                    dispatch(
                        updateDocumentContent({
                            content: event.target.value,
                        })
                    );
                }}
            />
        </section>
    );
}

interface TextAreaElementProps extends ComponentPropsWithoutRef<'textarea'> {}

function TextAreaElement({ ...textAreaElementProps }: TextAreaElementProps) {
    return (
        <textarea
            {...textAreaElementProps}
            className={`w-full grow outline-none resize-none p-4 font-roboto-mono leading-relaxed ${styles.workspace}`}
        ></textarea>
    );
}

export default Markdown;
