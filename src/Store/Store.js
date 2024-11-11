/* eslint-disable no-undef */
import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Reducerbank } from "./reducer/Reducerbank";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducerbank);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);

console.log(store.getState())