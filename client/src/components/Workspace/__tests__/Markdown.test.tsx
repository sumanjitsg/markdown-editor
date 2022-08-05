import { render, screen } from "@testing-library/react";

import Markdown from "../Markdown";
import { Provider } from "react-redux";
import { store } from "store";

test('Markdown header text "Markdown"', () => {
  render(
    <Provider store={store}>
      <Markdown viewToggler={<></>} />
    </Provider>
  );

  const headingMarkdown = screen.getByRole("heading", { name: /Markdown/i });
  expect(headingMarkdown).toBeInTheDocument();
});
