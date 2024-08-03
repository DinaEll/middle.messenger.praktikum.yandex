import Block from "./block";
import Route from "./route";

class Router {
  private static __instance: Router;
  private routes: Route[] | undefined;
  private history: History | undefined;
  private _currentRoute: null | Route = null;
  private readonly _rootQuery: string | undefined;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  public static getRouter() {
    return this.__instance;
  }

  public get currentRoute() {
    return this._currentRoute?.pathname;
  }


  public currentRoutePathName() {
    return this._currentRoute ? this._currentRoute.pathname : null;
  }

  use(pathname: string, block: typeof Block) {
    // console.log(`Adding route: ${pathname}`);
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});
    this.routes?.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event) => {
      // console.log(`onpopstate: ${window.location.pathname}`);
      this._onRoute((event?.currentTarget as Window)?.location?.pathname);
    };
    // console.log(`Starting router with initial path: ${window.location.pathname}`);
    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    // console.log(`Routing to: ${pathname}`);
    const route = this.getRoute(pathname);
    if (!route) {
      // console.log(`Route not found: ${pathname}`);
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.navigate(pathname);
  }

  go(pathname: string) {
    // console.log(`Navigating to: ${pathname}`);
    this.history?.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history?.back();
  }

  forward() {
    this.history?.forward();
  }

  update() {
    this.history?.go(0);
  }

  getRoute(pathname: string) {
    if (!this.routes || this.routes.length === 0) return null;
    // console.log(`getRoute for ${pathname}: ${route ? "found" : "not found"}`);
    return this.routes.find(route => route.match(pathname));
  }
}

export default Router;
