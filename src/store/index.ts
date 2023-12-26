import { configureStore } from '@reduxjs/toolkit';
import documentsReducer from './documentsSlice';

export function setupStore() {
    return configureStore({
        reducer: {
            documents: documentsReducer,
        },
    });
}
export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
