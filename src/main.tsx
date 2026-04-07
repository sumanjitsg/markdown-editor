import React from 'react';
import { createRoot } from 'react-dom/client';

import Workspace from '@/components/Workspace';
import Splitter from '@/components/Workspace/Splitter';
import App from './App';
import '@/assets/sass/index.scss';

// Register service worker in production
if ('serviceWorker' in navigator && import.meta.env.PROD) {
    navigator.serviceWorker
        .register('/sw.js')
        .catch(e => console.error('SW registration failed', e));
}

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
