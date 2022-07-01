import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store";
import SaveButton from "./SaveButton";

describe("Active document download button", () => {
  test("should be a /download active document/ button", () => {
    // render download button
    render(
      <Provider store={store}>
        <SaveButton />
      </Provider>
    );

    // expect download button to be in document
    expect(
      screen.getByRole("button", { name: /download active document/i })
    ).toBeInTheDocument();
  });
  test.todo("click event should download active document");
});
