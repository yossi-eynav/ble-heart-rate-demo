import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './app.scss';

injectTapEventPlugin();

function createRoot() {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    return div;
}

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    , createRoot());
