import { render, screen } from '@testing-library/react';
import SaveButton from '../SaveButton';

describe('Active document download button', () => {
    test('should be a /download active document/ button', () => {
        // render download button
        render(<SaveButton />);

        // expect download button to be in document
        expect(
            screen.getByRole('button', { name: /download active document/i })
        ).toBeInTheDocument();
    });
    test.todo('click event should download active document');
});
