
export interface FinancialObligation {
    name_bank: string;
    obligation_code: string;
    expiration_date: string;
    capital_value: number;
    interest_value: number;
    installment_value: number;
    ibr: number;
    accounting_entry_id?: number;
    accrued_loan_days?: number | undefined;
}
