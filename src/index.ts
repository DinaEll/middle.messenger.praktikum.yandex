import './styles/index.scss';
import * as Components from './components';
import * as Pages from './pages';
import {registerComponent} from "./data/register-components";
import Router from "./data/router";
import {BASE_URLS} from "./config";
import {initialStateApp} from "./services/app";
import {IAppState} from "./modelsInterface/IAppState";
import {Store} from "./data/store";

Object.entries(Components).forEach(
    ([componentName, component]) => registerComponent(componentName, component)
)


declare global {
    interface Window {
        store: Store<IAppState>;
    }

    type Nullable<T> = T | null;

}

const initState: IAppState = {
    error: null,
    user: undefined,
    currentChat: null,
    chats: [],
}

window.store = new Store<IAppState>(initState);

const router = new Router(".app");
initialStateApp();


router
    .use(BASE_URLS['page-login'], Pages.LoginPage)
    .use(BASE_URLS['page-sign-up'], Pages.PageRegistration)
    .use(BASE_URLS['page-profile'], Pages.PageProfile)
    .use(BASE_URLS['page-404'], Pages.Page404)
    .use(BASE_URLS['page-500'], Pages.Page500)
    .use(BASE_URLS['page-chat'], Pages.PageChat)
    .start();
