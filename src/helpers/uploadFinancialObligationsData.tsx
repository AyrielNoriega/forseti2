import { storeFinancialObligationsData } from "../api";

export const uploadFinancialObligationsData = async () => {

    let res;
    await storeFinancialObligationsData()
        .then(response => {
            console.log('Respuesta ', response);
            res = response.data;

        })
        .catch(error => {
            console.log('Respuesta catch(error :', error);
            // throw error;
            res = error;
        });

    return res;
};
