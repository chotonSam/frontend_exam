import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import fetchThunk from "redux-thunk";

const persistConfig = {
  key: "persist-store",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(fetchThunk))
);

export const persistor = persistStore(store);
export default store;
