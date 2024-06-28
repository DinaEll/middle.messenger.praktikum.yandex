import './styles/index.scss';
import * as Components from './components';
import * as Pages from './pages';
import {registerComponent} from "./utils/registerComponents";
import {Block} from "./utils/Block";


const allComponents = {
  'Button': Components.Button,
  'Avatar': Components.Avatar,
  'Badge': Components.Badge,
  'Input': Components.Input,
  'InputShort': Components.InputShort,
  'InputWide': Components.InputWide,
  'InputSearch': Components.InputSearch,
  'Link': Components.Link,
  'Error': Components.Error,
  'ChatItem': Components.ChatItem,
  'ChatList': Components.ChatList,
  'Message': Components.Message,
  'MessageList': Components.MessageList,
  'Loader': Components.Loader,
  'Modal': Components.Modal,
  'FormAuth': Components.FormAuth,
  'FormProfile': Components.FormProfile,
}
const pages: { [index: string]: { component: unknown } } = {
  "startPage": {component: Pages.StartPage},
  "login": {component: Pages.LoginPage},
  "registrationPage": {component: Pages.RegistrationPage},
  "pageProfile": {component: Pages.PageProfile},
  "changeData": {component: Pages.ChangeData},
  "changePassword": {component: Pages.ChangePassword},
  "errorInternalServer": {component: Pages.ErrorInternalServer},
  "errorNotFound": {component: Pages.ErrorNotFound},
  "chatPage": {component: Pages.ChatPage},
};

Object.entries(allComponents).forEach(([name, component]) => {
  registerComponent(name, component);
});

const navigate = (page: string) => {
  const app = document.getElementById('app');
  const Component = pages[page].component as unknown as typeof Block;
  const component = new Component({events: {}});
  const htmlElement = component.getContent();
  if (!app?.firstElementChild) app?.append(document.createElement('div'));
  if (htmlElement)
    app?.firstElementChild?.replaceWith(htmlElement);
}
document.addEventListener('DOMContentLoaded', () => navigate('startPage'));
document.addEventListener('click', (e: Event) => {
  if (!e) return;
  if (!e.target) return;
  const page = (<HTMLDivElement>e.target).getAttribute('page');
  if (page) {
    navigate(page);
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
