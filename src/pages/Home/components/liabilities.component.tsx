import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';

import { AlertDialogSlide, CollapseAlert, DateFilter } from '../../../components/ui';
import { useDispatch, useSelector } from 'react-redux';
import {
    closeModalConfirmation,
    loadAllObligations,
    initCancelObligation,
    openModalConfirmation,
    setDataForStartNewObligation,
    startNewObligation,
    startCancelObligation
} from '../../../store/serviceLayer/thunks';
import { AppDispatch, RootState } from '../../../store/store';
import { currencyFormatter } from '../../../helpers';
import { FinancialObligation } from '../../../interfaces/interfaces';


export const LiabilitiesComponent = () => {

    const { obligations, dataForOneObligation, filterLoader, accountingIdToCancel } = useSelector((state: RootState ) => state.serviceLayer);
    const { openModal } = useSelector((state: RootState ) => state.serviceLayer);
    const [open, setOpen] = useState(false);
    const dispatch: AppDispatch = useDispatch();

    const handleAction  = () => {

        if (accountingIdToCancel) {
            dispatch(startCancelObligation(accountingIdToCancel));
        } else {
            dispatch(startNewObligation(dataForOneObligation));
        }
    };

    const onCloseModal = () => {
        setOpen(false);
        dispatch(closeModalConfirmation());
    };

    const handleDateFilterChange = (startDate: string) => {
        console.log('Filtro de fecha aplicado:', startDate);
        dispatch(loadAllObligations(startDate));
    };

    return (
        <>
            <Typography
                variant="h5"
                gutterBottom
                sx={{
                    marginY: 3
                }}
            >
                Obligaciones financieras
            </Typography>

            <DateFilter onChange={handleDateFilterChange} />

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="right" sx={{ fontWeight: 600 }}>Banco</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 600 }}>Número de credito</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 600 }}>Fecha de referencia de pago</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={filterLoader ? { pointerEvents: 'none', filter: 'opacity(0.5)' } : {}}>
                        {
                            obligations.map((row: any) => (
                                <Row key={row.obligation_code} row={row} setOpenModal={setOpen}/>
                            ))
                        }
                        {
                            obligations.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4}>
                                        <Typography
                                            component="div"
                                            align="center"
                                            sx={{
                                                paddingY: 3
                                            }}
                                        >
                                            No hay datos para mostrar
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>


                { open && openModal &&
                    <AlertDialogSlide
                        action={handleAction}
                        closeModal={onCloseModal}
                        openModal={open}
                    />
                }

            </TableContainer>
        </>
    );
};

interface RowProps {
    row: FinancialObligation;
    setOpenModal: (value: boolean) => void;
}


function Row({ row, setOpenModal }: RowProps) {

    const dispatch: AppDispatch = useDispatch();
    const { openModal } = useSelector((state: RootState ) => state.serviceLayer);
    const [open, setOpen] = useState(false);


    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        dispatch(setDataForStartNewObligation(row));
        setOpenModal(true);
        dispatch(openModalConfirmation("¿Desea confirmar la creación de este asiento?"));
    };

    const handleCancelAccounting: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        dispatch(initCancelObligation(row));
        setOpenModal(true);
        dispatch(openModalConfirmation("¿Desea cancelar el asiento contable?"));
    };

    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="right" sx={ row?.accounting_entry_id ? { color: 'green' } : {}}>
                    {row.name_bank}
                </TableCell>
                <TableCell align="right" sx={ row?.accounting_entry_id ? { color: 'green' } : {}}>{row.obligation_code}</TableCell>
                <TableCell align="right" sx={ row?.accounting_entry_id ? { color: 'green' } : {}}>{row.expiration_date}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box
                            component="form"
                            onSubmit={ handleSubmit }
                            sx={{ margin: 1 }}
                        >
                            <Typography variant="h6" gutterBottom component="div">
                                Resumen
                            </Typography>

                            <CollapseAlert />

                            <Table size="small" aria-label="pdf">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right" sx={{ fontWeight: 600 }}>Banco</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 600 }}>Número de credito</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 600 }}>Fecha de referencia de pago</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 600 }}>Valor de capital</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 600 }}>Valor intereses corriente</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 600 }}>Total a pagar en el periodo</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 600 }}>IBR</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 600 }}>Días de causación</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 600 }}>Id asiento contable</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={row.obligation_code}>
                                        <TableCell component="th" scope="row">{row.name_bank}</TableCell>
                                        <TableCell align="right">{row.obligation_code}</TableCell>
                                        <TableCell>{row.expiration_date}</TableCell>
                                        <TableCell align="right">{currencyFormatter(row.capital_value)}</TableCell>
                                        <TableCell align="right">{currencyFormatter(row.interest_value)}</TableCell>
                                        <TableCell align="right">{currencyFormatter(row.installment_value)}</TableCell>
                                        <TableCell align="right">{`${row?.ibr}%`}</TableCell>
                                        <TableCell align="right">{row.accrued_loan_days}</TableCell>
                                        <TableCell align="right">{row?.accounting_entry_id}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            {
                                row?.accounting_entry_id
                                    ? (
                                        <Button
                                            disabled={openModal}
                                            type="button"
                                            variant="contained"
                                            size="small"
                                            sx={{ marginY: 1 }}
                                            color="warning"
                                            onClick={handleCancelAccounting}
                                        >
                                            Cancelar asiento
                                        </Button>
                                    )
                                    : (
                                        <Button
                                            disabled={openModal}
                                            type="submit"
                                            variant="contained"
                                            size="small"
                                            sx={{ marginY: 1 }}
                                        >
                                            Crear asiento en SAP
                                        </Button>
                                    )
                            }
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
