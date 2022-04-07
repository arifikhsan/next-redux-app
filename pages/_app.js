import '../styles/globals.css';
import { wrapper } from '../store/store';
import { persistStore } from 'redux-persist';

import store from '../store/store';
import { Provider, useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// const persistor = persistStore(store)

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
