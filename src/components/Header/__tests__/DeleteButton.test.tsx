import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import DeleteButton from '../DeleteButton';

describe('Active document delete button', () => {
    test('should be a /delete active document/ button', () => {
        // render delete button
        render(
            <Provider store={store}>
                <DeleteButton />
            </Provider>
        );

        // expect delete button to be in document
        expect(
            screen.getByRole('button', { name: /delete active document/i })
        ).toBeInTheDocument();
    });
    test.todo(
        'click event should delete active document, remove from sidebar list and update active document if any remaining'
    );
});
