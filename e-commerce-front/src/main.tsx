import AppRouter from '@routes/AppRouter';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@styles/global.css"

import {store,persister} from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// to enable services to be work
import './services/axios-global'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        
        {/* this section [ loading ] when we have a delay to get data from local-storage */}
        {/* persistor: storage manager in local-storage */}
        <PersistGate loading={"please wait for do storing..."} persistor={persister}>
            <AppRouter />
        </PersistGate>
    </Provider>
)