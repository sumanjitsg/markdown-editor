import React from 'react';
import { createRoot } from 'react-dom/client';

import Workspace from '@/components/Workspace';
import Splitter from '@/components/Workspace/Splitter';
// Components
import App from './App';

// Styles
import '@/assets/sass/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App
            workspace={
                <Workspace
                    splitter={
                        <div className="hidden lg:block">
                            <Splitter />
                        </div>
                    }
                />
            }
        />
    </React.StrictMode>
);
