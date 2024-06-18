import { getSharePointFiles } from "../api";


export const loadSharePointFiles = async () => {

    let files;
    await getSharePointFiles()
        .then(response => {
            console.log('Respuesta ', response);
            files = response.data;
        })
        .catch(error => {
            console.log('Respuesta catch(error :', error);
            throw error;
        });


    return files;
};
