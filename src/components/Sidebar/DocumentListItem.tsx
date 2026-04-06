import { useDocumentStore } from '@/store/useDocumentStore';

import IconDocument from '@/assets/images/icon-document.svg?react';

type Props = {
    id: string;
};

function DocumentListItem({ id }: Props) {
    const name = useDocumentStore(s => s.documents[id]?.name);
    const created = useDocumentStore(s => s.documents[id]?.created);
    const open = useDocumentStore(s => s.open);

    return (
        <li className="flex items-center gap-x-4">
            <IconDocument className="shrink-0" />
            <div>
                <p className="font-light text-13px leading-tight text-gray-500">
                    {created?.toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                    })}
                </p>
                <button
                    type="button"
                    className="mt-1 text-15px leading-tight"
                    onClick={() => open(id)}
                >
                    {name}
                </button>
            </div>
        </li>
    );
}
export default DocumentListItem;
