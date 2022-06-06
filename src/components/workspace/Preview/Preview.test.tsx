import { render, screen } from "@testing-library/react";
import Preview from "./Preview";

test('Preview header text "Preview"', () => {
  render(<Preview viewToggler={<></>} />);

  const headingPreview = screen.getByRole(/heading/i, { name: /Preview/i });
  expect(headingPreview).toBeInTheDocument();
});
