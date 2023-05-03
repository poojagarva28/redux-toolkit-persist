import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slice/CounterSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer,persistStore } from 'redux-persist';

const reducers = combineReducers({
  counter: CounterSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),})

export const persistor = persistStore(store)