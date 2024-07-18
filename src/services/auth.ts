import {IAuthData, IUser} from "../modelsInterface/IUser";
import AuthApi from "../api/auth";
import {responseHasError} from "../utils/api.utils";
import Router from "../core/router";
import {BASE_URLS} from "../config";
import {initialStateApp, setStateUser} from "./app";


const authApi = new AuthApi('/auth');
const signUp = async (data: IUser) => {
    const result = await authApi.signUp(data);
    const error=responseHasError(result);
    if (error) throw Error(error);
    if(!error) {
        const newUser=await getUser() as IUser;
       setStateUser(newUser);
    }
    return result.data;
}
const signIn = async (data: IAuthData) => {
    const result = await authApi.signIn(data);
    const error = responseHasError(result );
    if (error) throw Error(error);
    if (!error) {
        await initialStateApp();
        Router.getRouter().go(BASE_URLS['page-chat'])
    }
}

const getUser = async () => {
  const result = await authApi.getAuthUser();
  const error = responseHasError(result);
  if (error) throw Error(error);
  if (!error)
    return result.data ? result.data : null;
  return undefined;

}

const logOut = async () => {
    const result = await authApi.logOut() ;
    const error = responseHasError(result);
    if (error) throw Error(error);
    Router.getRouter().go(BASE_URLS['page-login']);
    setStateUser(null);

}

export {
    signUp,
    signIn,
    getUser,
    logOut
}
