import { configureStore } from '@reduxjs/toolkit'
import { seatReducer } from './reducer/seatReducer';

export const store = configureStore({
    reducer: {
        seat: seatReducer,
    },
});