import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

test('Sidebar has heading with text "Markdown"', () => {
  // is expanded = false rendered fine? should it have default value? any implication on availability of child elements in collapsed mode?
  render(<Sidebar expanded={false} themeSwitch={<></>} />);

  const headingMarkdown = screen.getByRole(/heading/i, { name: /Markdown/ });
  expect(headingMarkdown).toBeInTheDocument();
});

test('Sidebar has heading with text "My Documents"', () => {
  render(<Sidebar expanded={false} themeSwitch={<></>} />);

  const headingMyDocuments = screen.getByRole(/heading/i, {
    name: /My Documents/,
  });
  expect(headingMyDocuments).toBeInTheDocument();
});

test('Sidebar has button with text "+ New Document"', () => {
  render(<Sidebar expanded={false} themeSwitch={<></>} />);

  const newDocumentButton = screen.getByRole(/button/i, {
    name: /\+ New Document/i,
  });
  expect(newDocumentButton).toBeInTheDocument();
});
