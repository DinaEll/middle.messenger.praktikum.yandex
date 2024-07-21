import {responseHasError} from "../utils/api.utils";
import ResourcesApi from "../api/resources";


const resourcesApi = new ResourcesApi('/resources');

const uploadResource = async (file:FormData) => {
    const result = await resourcesApi.uploadResource(file);
    const error=responseHasError(result);
    if (error) throw Error(error);
    if(!error)
    return result.data;
//todo
}

export {
    uploadResource
}
