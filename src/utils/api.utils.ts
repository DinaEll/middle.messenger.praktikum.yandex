import {BASE_URLS} from "../config";
import Router from "../data/router";
import alertController from "../data/alert-controller";
import Alert from "../components/alert";
import Block from "../data/block";
import modalController from "../data/modal-controller";
import {IResult} from "../data/http";


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
                return error;
            } else {
                if(modalController.opened)showModalAlert(error);
                else showAlert(error);
            }
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
