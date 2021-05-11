import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './view/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './global/config';

const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('DOMContentLoaded', async () => {
    await app.renderPage();
    swRegister();
    WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
