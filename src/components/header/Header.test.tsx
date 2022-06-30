import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store";
import Header from "./Header";

describe("Header", () => {
  test("should render the parameterized sidebar toggle element", () => {
    render(
      <Provider store={store}>
        <Header sidebarToggle={<div data-testid="sidebar-toggle-mock"></div>} />
      </Provider>
    );
  });
  test.todo("should render a /markdown/ heading text");
  test.todo("should render a /accessible name/ text input control");
  test.todo("should render a /accessible name/ button");
  test.todo("should render a /accessible name/ button");
});
