import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import profileSlice from './profile-slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
};

const appReducer = combineReducers({
  profile: profileSlice,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    console.log('HYDRATE');
  }
  
  return appReducer(state, action);
}

const presistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = ({ isServer }) => {
  if (isServer) {
    return configureStore({ reducer: rootReducer });
  } else {
    const store = configureStore({
      reducer: presistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
    store.__persistor = persistStore(store);
    return store;
  }
};

export const wrapper = createWrapper(makeStore);
