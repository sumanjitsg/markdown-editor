import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store";
import Header from "./Header";

describe("Header", () => {
  test.todo("should contain a /markdown/ heading text");
  test("should contain a document name textbox", () => {
    // render header
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    // expect textbox to be in document
    expect(
      screen.getByRole("textbox", { name: /document name/i })
    ).toBeInTheDocument();
  });
  test("should contain a delete button", () => {
    // render header
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    // expect delete button to be in document
    expect(
      screen.getByRole("button", { name: /delete active document/i })
    ).toBeInTheDocument();
  });
  test("should contain a download button", () => {
    // render header
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    // expect download button to be in document
    expect(
      screen.getByRole("button", { name: /download active document/i })
    ).toBeInTheDocument();
  });
});
