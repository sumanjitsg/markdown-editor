import { render, screen } from "@testing-library/react";

import Preview from "./Preview";
import { Provider } from "react-redux";
import { store } from "store";

test('Preview header text "Preview"', () => {
  render(
    <Provider store={store}>
      <Preview viewToggler={<></>} />
    </Provider>
  );

  const headingPreview = screen.getByRole(/heading/i, { name: /Preview/i });
  expect(headingPreview).toBeInTheDocument();
});
