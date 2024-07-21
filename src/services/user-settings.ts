import UserSettingsApi from "../api/user-settings";
import {IPasswords, IUser} from "../modelsInterface/IUser";
import {responseHasError} from "../utils/api.utils";
import {setStateUser} from "./app";
import Router from "../data/router";


const userApi=new UserSettingsApi('/user');

const  updateUserProfile=async (newUserData: IUser) => {
    const result= await userApi.changeUserProfile(newUserData);
    const error=responseHasError(result);
    if(error) throw Error(error);
    if(!error)setStateUser(result.data as IUser);

}
const  updateUserPassword=async (newUserPasswords: IPasswords) => {
    const result= await userApi.changeUserPassword(newUserPasswords);
    const error=responseHasError(result);
    if(error) throw Error(error);
    Router.getRouter().back();
}

const  updateUserAvatar=async (newAvatar:FormData) => {
    const result= await userApi.changeUserAvatar(newAvatar);
    const error=responseHasError(result);
    if(error) throw Error(error);
    setStateUser(result.data as IUser);
    return result.data as IUser;
}

const  searchUsersByLogin=async (login:string) => {
    const result= await userApi.searchUser(login);
    const error=responseHasError(result);
    if(error) throw Error(error);
    return result.data as IUser[];
}

export {
    updateUserProfile,
    updateUserPassword,
    updateUserAvatar,
    searchUsersByLogin
}
