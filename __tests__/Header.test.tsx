import Header from '@/components/Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
    test.todo('should contain a /markdown/ heading text');
    test.todo('should contain a sidebar expand switch');
    test('should contain a document name textbox', () => {
        // render header
        render(<Header sidebarExpandSwitch={<></>} />);

        // expect textbox to be in document
        expect(
            screen.getByRole('textbox', { name: /document name/i })
        ).toBeInTheDocument();
    });
    test('should contain a delete button', () => {
        // render header
        render(<Header sidebarExpandSwitch={<></>} />);

        // expect delete button to be in document
        expect(
            screen.getByRole('button', { name: /delete active document/i })
        ).toBeInTheDocument();
    });
    test('should contain a download button', () => {
        // render header
        render(<Header sidebarExpandSwitch={<></>} />);

        // expect download button to be in document
        expect(
            screen.getByRole('button', { name: /download active document/i })
        ).toBeInTheDocument();
    });
});
