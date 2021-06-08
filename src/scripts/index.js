import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/app-bar.css';
import '../styles/detail-page.css';
import '../styles/footer.css';
import '../styles/jumbotron.css';
import '../styles/list-item.css';
import '../styles/nav.css';
import '../styles/responsive.css';
import App from './view/app';
import swRegister from './utils/sw-register';
import './components/app-bar';

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
});
