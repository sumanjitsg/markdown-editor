import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store";
import DocumentTextbox from "../DocumentTextbox";

describe("Active document name textbox", () => {
  test("should be a /document name/ textbox", () => {
    // render textbox
    render(
      <Provider store={store}>
        <DocumentTextbox />
      </Provider>
    );

    // expect textbox to be in document
    expect(
      screen.getByRole("textbox", { name: /document name/i })
    ).toBeInTheDocument();
  });
  test.todo("should have active document name as display value");
  test.todo(
    "change event should update active document name here and in sidebar list"
  );
});
