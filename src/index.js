import './index.css';
import Handlebars from 'handlebars';
import loginTemplate from './pages/authorization/login.hbs?raw';

const mainSource = `
  <h1>{{ message }}</h1>
  <a href="/login" id="login-link">Перейти на страницу логина</a>

`;
const mainTemplate = Handlebars.compile(mainSource);

const app = document.querySelector('#app');
app.innerHTML = mainTemplate({ message: 'Привет, мир!' });

function showLoginPage() {
    window.location.href = '/login';

}

document.getElementById('login-link').addEventListener('click', (event) => {
    event.preventDefault();
    showLoginPage();
});
