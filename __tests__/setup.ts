import '@testing-library/jest-dom';
import { useDocumentStore } from '@/store/useDocumentStore';

beforeEach(() => {
    useDocumentStore.setState(useDocumentStore.getInitialState(), true);
});
