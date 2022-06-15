import { render, screen } from "@testing-library/react";
import Markdown from "./Markdown";

test('Markdown header text "Markdown"', () => {
  render(
    <Markdown viewToggler={<></>} content={""} onChangeHandler={() => {}} />
  );

  const headingMarkdown = screen.getByRole(/heading/i, { name: /Markdown/i });
  expect(headingMarkdown).toBeInTheDocument();
});