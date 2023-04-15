import createSagaMiddleware from "redux-saga";
import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
    MiddlewareArray,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { PostSlice } from "./slice/post.slice";
import rootSaga from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["post"],
};

const rootReducer = combineReducers({
    post: PostSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: new MiddlewareArray().concat(
        getDefaultMiddleware({
            immutableCheck: true,
            serializableCheck: false,
        }).concat(sagaMiddleware)
    ),
    devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export { store, persistor };

sagaMiddleware.run(rootSaga);