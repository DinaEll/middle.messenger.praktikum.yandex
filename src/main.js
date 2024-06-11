import './style.css';
import handlebars from 'handlebars';

const source = '<h1>{{ message }}</h1>';
const template = handlebars.compile(source);

const app = document.querySelector('#app');
app.innerHTML = template({ message: 'Привет, мир!' });

