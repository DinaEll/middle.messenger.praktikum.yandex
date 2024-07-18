import {BASE_URLS} from "../config";
import Router from "../core/router";
import alertController from "../core/alert-controller";
import Alert from "../components/1/alert";
import Block from "../core/block";
import modalController from "../core/modal-controller";
import {IResult} from "../core/Http";


export const responseHasError = (response: IResult) => {
    switch (response.status) {
        case 200:
            return false;
        case 500:
            Router.getRouter().go(BASE_URLS['page-500']);
            break; //todo
        default: {
            const error = (response.data as unknown as {reason:string}).reason;
            if (error.includes('Cookie')) {
               // showAlert('Please, login!');
                return error;
            } else {
                if(modalController.opened)showModalAlert(error);
                else showAlert(error);
            }
            //if (error) throw Error(error);
            return error;
        }

    }
}

export const showAlert = (message: string) => {
    alertController.addModal((new Alert({
        message: message || ''
    })) as unknown as Block);
    alertController.openModal();
}

export const showModalAlert = (message: string) => {
    alertController.addModal((new Alert({
        message: message || ''
    })) as unknown as Block);
    alertController.open();
}
