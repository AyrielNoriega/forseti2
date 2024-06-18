import axios from 'axios';
import { FinancialObligation } from '../interfaces/interfaces';

export const getFinalcialObligations = async () => {
    console.log('en getJournalEntriesApi');

    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/v1/financial-obligations',
        // responseType: 'stream',
        headers: {
            'Content-Type': 'application/json',
        }
    };


    try {
        const response = await axios.request(config);
        console.log(response);
        console.log("try");

        return response;
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        throw error;
    }
};


export const storeFinancialObligations = async (row: FinancialObligation) => {
    console.log('en storeFinancialObligations');

    const data = JSON.stringify(row);
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/v1/financial-obligations',
        // responseType: 'stream',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    try {
        const response = await axios.request(config);
        console.log(response);
        return response;
    } catch (error) {
        // console.error('Error al guardar datos, method storeFinalcialObligations: ', error);
        console.error('Error al guardar datos');
        throw error;
    }
};

export const getSharePointFiles = async () => {
    console.log('en storeFinancialObligations');

    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/v1/pdf-list',
        // responseType: 'stream',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios.request(config);
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error al obtener datos, method storeFinalcialObligations: ', error);
        console.error('Error al obtener datos');
        throw error;
    }
};

export const getFinancialObligationsByCriteria = async (startDate: string) => {
    console.log('en getFinancialObligations');

    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:8000/v1/financial-obligations-by-criteria/?start_date=${startDate}`,
        // responseType: 'stream',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios.request(config);

        return response;
    } catch (error) {
        console.error('Error al obtener datos: ', error);
        throw error;
    }
};

export const storeFinancialObligationsData = async () => {
    console.log('en storeFinancialObligationsData');

    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/v1/pdf',
        // responseType: 'stream',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios.request(config);
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error al obtener datos: ', error);
        throw error;
    }
};


export const cancelFinancialObligation = async (row: number) => {
    console.log('en cancelFinancialObligation', row);

    const config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:8000/v1/financial-obligations/${row}`,
        // responseType: 'stream',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    try {
        const response = await axios.request(config);
        console.log(response);
        return response;
    } catch (error: any) {
        // console.error('Error al guardar datos, method storeFinalcialObligations: ', error);
        console.error('Error al cancelar obligacion', error);

        const err = error.response?.status;
        const message = error.response?.data.message;
        const errorObj = {
            error: err,
            message: message
        };
        throw errorObj;
    }
};
