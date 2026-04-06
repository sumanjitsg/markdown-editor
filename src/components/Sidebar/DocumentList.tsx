import { useShallow } from 'zustand/react/shallow';
import { useDocumentStore } from '@/store/useDocumentStore';

import DocumentListItem from './DocumentListItem';

function DocumentList() {
    const ids = useDocumentStore(useShallow(s => Object.keys(s.documents)));

    return (
        <ul aria-labelledby="my-documents-label" className="mt-6 space-y-6">
            {ids.map(id => (
                <DocumentListItem id={id} key={id} />
            ))}
        </ul>
    );
}
export default DocumentList;
