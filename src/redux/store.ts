import { createStore, applyMiddleware } from "redux";
import createSagaNiddleware from "redux-saga";
import rootSagas from "./sagas";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const middleware = createSagaNiddleware();

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(middleware));

export const persistor = persistStore(store);

middleware.run(rootSagas);
