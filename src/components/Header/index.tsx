import { ReactElement } from 'react';

import DocumentTextbox from './DocumentTextbox';
import DeleteButton from './DeleteButton';
import SaveButton from '@/components/Header/SaveButton';

type Props = {
    sidebarExpandSwitch: ReactElement;
};

function Header({ sidebarExpandSwitch }: Props) {
    return (
        <header data-testid="header" className="flex h-16">
            {/* Sidebar expand switch */}
            {sidebarExpandSwitch}
            <div className="grow pl-6 pr-2 flex items-center justify-between bg-gray-800">
                {/* active document name */}
                <div className="grow">
                    <DocumentTextbox />
                </div>

                <div className="flex justify-self-end items-center gap-x-4">
                    {/* delete document button */}
                    {/* todo: change active doc on delete, if last document, do something */}
                    <DeleteButton />

                    {/* save document button */}
                    <SaveButton />
                </div>
            </div>
        </header>
    );
}

export default Header;
