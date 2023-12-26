import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from 'App';
import { Provider } from 'react-redux';
import { setupStore } from 'store';

describe('App', () => {
    test('should have a sidebar expand button within header', () => {
        const store = setupStore();

        render(
            <Provider store={store}>
                <App workspace={<></>} />
            </Provider>
        );

        const header = screen.getByTestId(/header/i);

        expect(
            within(header).getByRole('button', {
                name: /expand sidebar/i,
            })
        ).toBeInTheDocument();
    });

    test.todo('sidebar expand button should have tab focus on render');

    test('sidebar should be invisible on render', async () => {
        const store = setupStore();

        render(
            <Provider store={store}>
                <App workspace={<></>} />
            </Provider>
        );

        const sidebar = await screen.findByTestId(/sidebar/i);

        expect(sidebar).toHaveClass('invisible');
    });

    test.todo('sidebar and its child elements cannot be tab focused on render');

    test('clicking sidebar expand button should expand sidebar', async () => {
        const store = setupStore();

        // render app
        render(
            <Provider store={store}>
                <App workspace={<></>} />
            </Provider>
        );

        // find Sidebar
        // getByTestId won't work because sidebar is loaded lazily
        const sidebar = await screen.findByTestId(/sidebar/i);

        // expect sidebar to be invisible
        /* toBeVisible not working as expected with visibility property (https://github.com/testing-library/jest-dom/issues/209) */

        expect(sidebar).toHaveClass('invisible');

        // click sidebar control button
        await user.click(
            screen.getByRole('button', {
                name: /expand sidebar/i,
            })
        );

        // expect sidebar to be visible
        expect(sidebar).not.toHaveClass('invisible');
    });

    describe('with Sidebar expanded', () => {
        test("clicking 'New Document' button once adds a new document to the top of 'My Documents' list", async () => {
            const store = setupStore();

            render(
                <Provider store={store}>
                    <App workspace={<></>} />
                </Provider>
            );

            await user.click(
                screen.getByRole('button', {
                    name: /expand sidebar/i,
                })
            );

            const myDocumentsList = screen.getByRole('list', {
                name: /my documents/i,
            });

            let listItems = within(myDocumentsList).getAllByRole('listitem');

            expect(listItems.length).toEqual(2);

            await user.click(
                screen.getByRole('button', {
                    name: /new document/i,
                })
            );

            listItems = within(myDocumentsList).getAllByRole('listitem');

            expect(listItems.length).toEqual(3);
        });

        test("clicking 'New Document' button multiple times adds multiple new documents to the top of 'My Documents' list", async () => {
            const store = setupStore();

            render(
                <Provider store={store}>
                    <App workspace={<></>} />
                </Provider>
            );

            await user.click(
                screen.getByRole('button', {
                    name: /expand sidebar/i,
                })
            );

            const myDocumentsList = screen.getByRole('list', {
                name: /my documents/i,
            });

            let listItems = within(myDocumentsList).getAllByRole('listitem');

            expect(listItems.length).toEqual(2);

            await user.click(
                screen.getByRole('button', {
                    name: /new document/i,
                })
            );

            listItems = within(myDocumentsList).getAllByRole('listitem');

            expect(listItems.length).toEqual(3);

            await user.click(
                screen.getByRole('button', {
                    name: /new document/i,
                })
            );

            listItems = within(myDocumentsList).getAllByRole('listitem');

            expect(listItems.length).toEqual(4);

            await user.click(
                screen.getByRole('button', {
                    name: /new document/i,
                })
            );

            listItems = within(myDocumentsList).getAllByRole('listitem');

            expect(listItems.length).toEqual(5);
        });

        test.todo(
            'clicking a document name updates the document name textbox in header'
        );
        test.todo(
            'clicking a document name updates the active document in workspace'
        );
        test.todo('clicking color theme switch once toggles workspace theme');
        test.todo(
            'clicking color theme switch multiple times toggles workspace theme'
        );
    });

    test('editing document name in header renames file in sidebar', async () => {
        const store = setupStore();

        render(
            <Provider store={store}>
                <App workspace={<></>} />
            </Provider>
        );

        const header = screen.getByTestId(/header/i);

        const documentNameTextbox = within(header).getByRole('textbox', {
            name: /document name/i,
        });

        const activeDocumentName = (documentNameTextbox as HTMLInputElement)
            .value;

        await user.click(
            screen.getByRole('button', {
                name: /expand sidebar/i,
            })
        );

        const myDocumentsList = screen.getByRole('list', {
            name: /my documents/i,
        });

        const fileToBeRenamed = within(myDocumentsList).getByRole('button', {
            name: new RegExp(`^${activeDocumentName}$`, 'i'),
        });

        await user.clear(documentNameTextbox);
        await user.type(documentNameTextbox, 'test.md{enter}');

        expect(fileToBeRenamed).toHaveAccessibleName(/^test\.md$/i);
    });
});
