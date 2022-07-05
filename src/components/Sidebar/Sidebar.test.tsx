import { render, screen } from "@testing-library/react";

import Sidebar from "./Sidebar";
import { Provider } from "react-redux";
import { store } from "store";

describe("Sidebar", () => {
  test("should have a /markdown/ heading text", () => {
    // is expanded = false rendered fine? should it have default value? any implication on availability of child elements in collapsed mode?
    render(
      <Provider store={store}>
        <Sidebar expanded={false} colorThemeSwitch={<></>} />
      </Provider>
    );

    const headingMarkdown = screen.getByRole("heading", { name: /markdown/i });
    expect(headingMarkdown).toBeInTheDocument();
  });

  test("should have a /my documents/ heading text", () => {
    render(
      <Provider store={store}>
        <Sidebar expanded={false} colorThemeSwitch={<></>} />
      </Provider>
    );

    const headingMyDocuments = screen.getByRole("heading", {
      name: /my documents/i,
    });
    expect(headingMyDocuments).toBeInTheDocument();
  });

  test("should have a /new document/ button", () => {
    render(
      <Provider store={store}>
        <Sidebar expanded={false} colorThemeSwitch={<></>} />
      </Provider>
    );

    const newDocumentButton = screen.getByRole("button", {
      name: /new document/i,
    });
    expect(newDocumentButton).toBeInTheDocument();
  });
  test.todo("may have a list of documents");
  test.todo("should have a site theme toggle button");
  test.todo("shouldn't allow tab focus to leave an expanded sidebar");
});
