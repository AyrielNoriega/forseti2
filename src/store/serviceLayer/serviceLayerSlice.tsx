import { createSlice } from '@reduxjs/toolkit';
import { FinancialObligation } from '../../interfaces/interfaces';

const initialState = {
    saveAlert: false,
    dataForOneObligation: {} as FinancialObligation,
    obligations: [] as FinancialObligation[],
    isSaving: false,
    accountingIdToCancel: null,
    errorMessage: '',
    saveMessage: '',
    messageModal: '',
    openModal: false,
    filterLoader: false
};

export const serviceLayerSlice = createSlice({
    name: 'serviceLayer',
    initialState,
    reducers: {
        addNewObligation: (state) => {
            state.saveAlert = true;
        },
        setSaveAlert: (state, action) => {
            state.saveAlert = action.payload;
        },
        setObligations: (state, action) => {
            state.obligations = action.payload;
        },
        updateInternalAccountingEntryId: (state, action) => {
            const { obligation_code, accounting_entry_id } = action.payload;

            const updatedObligation = state.obligations.find(obligation =>
                obligation.obligation_code === obligation_code
            );

            if (updatedObligation) {
                updatedObligation.accounting_entry_id = accounting_entry_id;
            }
        },
        updateAccountingEntryIdWhenCancel: (state, action) => {
            const { accounting_entry_id } = action.payload;

            const updatedObligation = state.obligations.find(obligation =>
                obligation.accounting_entry_id === accounting_entry_id
            );

            if (updatedObligation) {
                updatedObligation.accounting_entry_id = undefined;
            }
        },
        setDataForOneObligation: (state, action) => {
            state.dataForOneObligation = action.payload;
        },
        setDataForCancelObligation: (state, action) => {
            console.log(action.payload.accounting_entry_id);
            state.accountingIdToCancel = action.payload.accounting_entry_id;
        },
        setSaving: (state) => {
            state.isSaving = true;
        },
        openModal: (state, action) => {
            state.openModal = true;
            state.messageModal = action.payload;
        },
        closeModal: (state) => {
            state.openModal = false;
            state.errorMessage = '';
            state.saveMessage = '';
            state.messageModal = '';
            state.isSaving = false;
            state.accountingIdToCancel = null;
        },
        setSaveMessage: (state, action) => {
            state.saveMessage = action.payload;
            state.isSaving = false;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
            state.isSaving = false;
        },
        setFilterLoader: (state, action) => {
            state.filterLoader = action.payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    addNewObligation,
    setSaveAlert,
    setObligations,
    updateInternalAccountingEntryId,
    updateAccountingEntryIdWhenCancel,
    setDataForOneObligation,
    setDataForCancelObligation,
    openModal,
    closeModal,
    setErrorMessage,
    setSaveMessage,
    setSaving,
    setFilterLoader
} = serviceLayerSlice.actions;
