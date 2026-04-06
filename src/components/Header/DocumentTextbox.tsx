import {
    useState,
    ComponentPropsWithoutRef,
    ReactElement,
    useEffect,
} from 'react';
import { useDocumentStore } from '@/store/useDocumentStore';

import IconDocument from '@/assets/images/icon-document.svg?react';

function DocumentTextbox() {
    const current = useDocumentStore(s => s.current);
    const name = useDocumentStore(s =>
        s.current ? s.documents[s.current]?.name : undefined
    );
    const update = useDocumentStore(s => s.update);

    const [inputValue, setInputValue] = useState(name);

    useEffect(() => {
        setInputValue(name);
    }, [name]);

    if (current === null) {
        return null;
    }

    return (
        <InputElement
            aria-label="Document Name"
            type="text"
            size={10}
            value={inputValue}
            onChange={event => {
                setInputValue(event.currentTarget.value);
            }}
            onKeyDown={event => {
                if (event.code === 'Enter') {
                    update({ name: event.currentTarget.value });
                }
            }}
            iconElement={<IconDocument />}
        />
    );
}

interface InputElementProps extends ComponentPropsWithoutRef<'input'> {
    iconElement?: ReactElement;
}

function InputElement({
    iconElement,
    ...inputElementProps
}: InputElementProps) {
    return (
        <div className="flex items-center gap-x-4">
            {iconElement}
            <label>
                <div className="font-light text-13px leading-tight text-gray-500 sr-only lg:not-sr-only">
                    {inputElementProps['aria-label']}
                </div>
                <input
                    {...inputElementProps}
                    className="bg-gray-800 mt-1 text-15px leading-tight caret-orange-400 hover:border-b focus:outline-none focus:border-b"
                />
            </label>
        </div>
    );
}

export default DocumentTextbox;
