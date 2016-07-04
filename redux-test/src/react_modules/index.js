import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import cartApp from './reducers';
import App from './components/App';

let store = createStore(cartApp);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('content-wrapper'))
