import {
    ReactElement,
    useState,
    useEffect,
    ComponentPropsWithoutRef,
} from 'react';
import { useDocumentStore } from '@/store/useDocumentStore';

import Header from '@/components/Workspace/Header';

import styles from '@/assets/sass/components/_workspace.module.scss';

// Types
type Props = {
    viewToggler: ReactElement;
};

function Markdown({ viewToggler }: Props) {
    const current = useDocumentStore(s => s.current);
    const content = useDocumentStore(s =>
        s.current ? s.documents[s.current]?.content : null
    );
    const update = useDocumentStore(s => s.update);

    const [value, setValue] = useState(content ?? undefined);

    useEffect(() => {
        setValue(content ?? '');
    }, [content]);

    return (
        <section className={'flex flex-col min-h-full'}>
            <Header headingText="Markdown" viewToggle={viewToggler} />
            <TextAreaElement
                disabled={current === null}
                aria-label="Markdown editor"
                spellCheck="false"
                value={value}
                onChange={event => {
                    setValue(event.currentTarget.value);
                    update({ content: event.target.value });
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
