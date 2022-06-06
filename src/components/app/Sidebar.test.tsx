import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

test('Sidebar has heading with text "Markdown"', () => {
  render(<Sidebar themeToggler={<></>} />);

  const headingMarkdown = screen.getByRole(/heading/i, { name: /Markdown/ });
  expect(headingMarkdown).toBeInTheDocument();
});

test('Sidebar has heading with text "My Documents"', () => {
  render(<Sidebar themeToggler={<></>} />);

  const headingMyDocuments = screen.getByRole(/heading/i, {
    name: /My Documents/,
  });
  expect(headingMyDocuments).toBeInTheDocument();
});

test('Sidebar has button with text "+ New Document"', () => {
  render(<Sidebar themeToggler={<></>} />);

  const newDocumentButton = screen.getByRole(/button/i, {
    name: /\+ New Document/i,
  });
  expect(newDocumentButton).toBeInTheDocument();
});
