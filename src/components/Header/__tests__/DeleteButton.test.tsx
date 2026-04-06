import { render, screen } from '@testing-library/react';
import DeleteButton from '../DeleteButton';

describe('Active document delete button', () => {
    test('should be a /delete active document/ button', () => {
        // render delete button
        render(<DeleteButton />);

        // expect delete button to be in document
        expect(
            screen.getByRole('button', { name: /delete active document/i })
        ).toBeInTheDocument();
    });
    test.todo(
        'click event should delete active document, remove from sidebar list and update active document if any remaining'
    );
});
