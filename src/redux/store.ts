// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Slice/MySlice';

const store = configureStore({
    reducer: {
        notes: Reducer,
    },
});

export default store;
