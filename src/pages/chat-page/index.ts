import Handlebars from 'handlebars';

import './chat-page.scss';

export { default as ChatPage } from './chat-page.hbs?raw';

Handlebars.registerHelper('chat-page-list', () => {
  return [
    { name: 'Ананас', message: 'Я тот еще фрукт', unread: '2', avatar: '../assets/Ананасик.png' },
    {
      name: 'Киви',
      message:
        'В данный момент ученые сообщают о примерно 70 тысячах особей киви, обитающих на островах Новой Зеландии',
      avatar: '../assets/Киви.png',
    },
    {
      name: 'Мандаринка',
      message: 'Ты есть в Телеграмм, а я в Красной Книге',
      unread: '4',
      avatar: '../assets/Мандаринка.png',
    },
  ];
});
