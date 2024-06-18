import { getFinancialObligationsByCriteria } from "../api";

export const loadFinancialObligations = async (startDate: string) => {

    try {
        const response = await getFinancialObligationsByCriteria(startDate);
        console.log('Respuesta: ', response);
        return response;
    } catch (error) {
        console.log('Error en loadFinancialObligations: ', error);
        throw error;
    }

};
