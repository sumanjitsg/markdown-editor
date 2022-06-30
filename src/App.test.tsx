import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import App from "App";
import { Provider } from "react-redux";
import { store } from "store";

describe("App", () => {
  test('should expand Sidebar on clicking "sidebar control" button', async () => {
    // render app
    render(
      <Provider store={store}>
        <App workspace={<></>} />
      </Provider>
    );

    // get Sidebar
    const sidebar = await screen.findByTestId(/sidebar/i);

    // expect sidebar to be invisible
    /* toBeVisible not working as expected with visibility property (https://github.com/testing-library/jest-dom/issues/209) */

    expect(sidebar).toHaveClass("invisible");

    // click sidebar control button
    await user.click(
      screen.getByRole("button", {
        name: /my documents sidebar control/i,
      })
    );

    // expect sidebar to be visible
    expect(screen.getByTestId(/sidebar/i)).not.toHaveClass("invisible");
  });
});
