import { Dispatch } from "redux";

import { cancelFinancialObligation, storeFinancialObligations, storeFinancialObligationsData } from "../../api";
import {
    closeModal,
    setErrorMessage,
    setSaving,
    addNewObligation,
    setSaveAlert,
    setDataForOneObligation,
    setObligations,
    openModal,
    setFilterLoader,
    updateInternalAccountingEntryId,
    setDataForCancelObligation,
    updateAccountingEntryIdWhenCancel
} from "./serviceLayerSlice";
import { loadFinancialObligations } from "../../helpers";
import { FinancialObligation } from "../../interfaces/interfaces";


export const startNewObligation = (props: FinancialObligation) => {

    const {
        name_bank,
        obligation_code,
        expiration_date,
        capital_value,
        interest_value,
        installment_value,
        ibr,
    } = props;

    return async (dispatch: Dispatch) => {
        dispatch(setSaving());
        console.log("startNewObligation");

        const newObligation = {
            name_bank,
            obligation_code,
            expiration_date,
            capital_value,
            interest_value,
            installment_value,
            ibr,
        };

        await storeFinancialObligations(newObligation)
            .then(response => {
                console.log('Respuesta de storeFinancialObligations:', response.data);

                dispatch(updateInternalAccountingEntryId(response.data));
                dispatch(addNewObligation());
                dispatch(closeModal());
            })
            .catch(error => {
                console.log('Respuesta catch(error :', error);
                dispatch(setErrorMessage('No se pudo guardar, Contacte con el administrador.'));
            });


        setTimeout(() => {
            dispatch(setSaveAlert(false));
        }, 3000);
    };
};

export const setDataForStartNewObligation = (props : FinancialObligation) => {

    return async (dispatch: Dispatch) => {

        dispatch(setDataForOneObligation(props));
    };
};



export const startCancelObligation = (accounting_entry_id: number) => {


    return async (dispatch: Dispatch) => {
        dispatch(setSaving());
        console.log("startCancelObligation");

        await cancelFinancialObligation(accounting_entry_id)
            .then(response => {
                console.log('Respuesta de storeFinancialObligations:', response);

                dispatch(updateAccountingEntryIdWhenCancel({accounting_entry_id}));
                // dispatch(addNewObligation());
                dispatch(closeModal());
            })
            .catch(error => {
                console.log('Respuesta catch(error :', error);
                dispatch(setErrorMessage(`No se pudo cancelar: ${error.message}`));
            });


        setTimeout(() => {
            dispatch(setSaveAlert(false));
        }, 3000);
    };
};


export const initCancelObligation = (props : FinancialObligation) => {

    return async (dispatch: Dispatch) => {

        dispatch(setDataForCancelObligation(props));

    };
};


export const startUploadAllPdf = () => {

    return async (dispatch: Dispatch) => {
        dispatch(setSaving());

        await storeFinancialObligationsData()
            .then(response => {
                console.log('Respuesta ', response);
                dispatch(closeModal());

            })
            .catch(error => {
                console.log('Respuesta catch(error :', error);
                dispatch(setErrorMessage('No se pudo guardar, Contacte con el administrador.'));

            });

    };
};

export const loadAllObligations = (startDate: string ) => {
    return async (dispatch: Dispatch) => {
        dispatch(setFilterLoader(true));

        const res = await loadFinancialObligations(startDate);

        dispatch(setObligations(res.data));

        dispatch(setFilterLoader(false));

    };
};


export const closeModalConfirmation = () => {

    return async (dispatch: Dispatch) => {
        dispatch(closeModal());
    };
};

export const openModalConfirmation = (message: string) => {

    return async (dispatch: Dispatch) => {
        dispatch(openModal(message));
    };
};
