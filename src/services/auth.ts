import {IAuthData, IUser} from "../modelsInterface/IUser";
import AuthApi from "../api/auth";
import {responseHasError} from "../utils/api.utils";
import Router from "../data/router";
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

interface CustomError extends Error {
  reason?: string;
}

const signIn = async (data: IAuthData) => {
  try {
    await authApi.signIn(data);
    await initialStateApp();
    Router.getRouter().go(BASE_URLS['page-chat']);
  } catch (error) {
    const customError = error as CustomError;
    if (customError.reason === 'User already in system') {
      Router.getRouter().go(BASE_URLS['page-chat']);
    }
  }
};

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
