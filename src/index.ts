import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages/index';

interface PageDefinition {
  [key: string]: [string, any?];
}

const pages: PageDefinition = {
  'chat': [Pages.ChatPage],
  'login': [Pages.LoginPage],
  'registration': [Pages.RegistrationPage],
  'errorNotFound': [Pages.ErrorNotFoundPage],
  'errorInternalServer': [Pages.ErrorInternalServerPage],
  'start': [Pages.StartPage],
  'changeData': [Pages.ChangeDataPage],
  'user': [Pages.UserPage],
  'changePassword': [Pages.ChangePasswordPage],
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  const [source, args] = pages[page];
  const handlebarsFunct = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunct(args);
}

document.addEventListener('DOMContentLoaded', () => navigate('start'));

document.addEventListener('click', (e: Event) => {
  const target = e.target as HTMLElement;
  const page = target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
