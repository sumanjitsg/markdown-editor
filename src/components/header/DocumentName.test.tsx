import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store";
import DocumentName from "./DocumentName";

describe("Active document name textbox", () => {
  test("should be a /document name/ textbox", () => {
    // render textbox
    render(
      <Provider store={store}>
        <DocumentName />
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
