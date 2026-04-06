// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { beforeEach } from 'vitest';
import { useDocumentStore } from '@/store/useDocumentStore';

beforeEach(() => {
    useDocumentStore.setState(useDocumentStore.getInitialState(), true);
});
