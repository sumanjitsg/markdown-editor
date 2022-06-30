import { render, screen } from "@testing-library/react";

import Sidebar from "./Sidebar";
import { Provider } from "react-redux";
import { store } from "store";

describe("Sidebar", () => {
  test('has heading with text "Markdown"', () => {
    // is expanded = false rendered fine? should it have default value? any implication on availability of child elements in collapsed mode?
    render(
      <Provider store={store}>
        <Sidebar expanded={false} themeSwitch={<></>} />
      </Provider>
    );

    const headingMarkdown = screen.getByRole(/heading/i, { name: /Markdown/ });
    expect(headingMarkdown).toBeInTheDocument();
  });

  test('has heading with text "My Documents"', () => {
    render(
      <Provider store={store}>
        <Sidebar expanded={false} themeSwitch={<></>} />
      </Provider>
    );

    const headingMyDocuments = screen.getByRole(/heading/i, {
      name: /My Documents/,
    });
    expect(headingMyDocuments).toBeInTheDocument();
  });

  test('has button with text "+ New Document"', () => {
    render(
      <Provider store={store}>
        <Sidebar expanded={false} themeSwitch={<></>} />
      </Provider>
    );

    const newDocumentButton = screen.getByRole(/button/i, {
      name: /new document/i,
    });
    expect(newDocumentButton).toBeInTheDocument();
  });
});
