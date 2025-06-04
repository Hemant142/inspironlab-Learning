import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/Auth/auth.Slice";
import productReducer from "./features/Product/product.Slice";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const persistConfig={
    key:'root',
    storage ,
    whitelist:['auth','product']

}

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store= configureStore({
reducer:persistedReducer,
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


// Add these lines:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;