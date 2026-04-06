import { render, screen } from '@testing-library/react';

import Markdown from '../Markdown';

test('Markdown header text "Markdown"', () => {
    render(<Markdown viewToggler={<></>} />);

    const headingMarkdown = screen.getByRole('heading', { name: /Markdown/i });
    expect(headingMarkdown).toBeInTheDocument();
});
