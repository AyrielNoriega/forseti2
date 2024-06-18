import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, Button, Typography } from '@mui/material';

import { startUploadAllPdf, openModalConfirmation, closeModalConfirmation } from '../../../store/serviceLayer/thunks';
import { AlertDialogSlide } from '../../../components/ui';
import { AppDispatch, RootState } from '../../../store/store';


export const DataGridPDF = () => {
    const dispatch: AppDispatch = useDispatch();
    const { openModal } = useSelector((state: RootState ) => state.serviceLayer);
    const [open, setOpen] = useState(false);

    const handleStartUploadAllPdf  = () => {
        dispatch(startUploadAllPdf());
    };

    const handleStartAll = () => {
        setOpen(true);
        dispatch(openModalConfirmation("¿Desea guardar todos los pdf?"));
    };

    const onCloseModal = () => {
        setOpen(false);
        dispatch(closeModalConfirmation());
    };

    return (
        <Box
            sx={{
                width: '100%',
                marginY: 2,
                textAlign: "center"
            }}
        >
            <Typography
                sx={{
                    marginY: 1
                }}
            >
                Cargar obligaciones financieras
            </Typography>

            <Button
                size="small"
                variant="contained"
                onClick={handleStartAll }
            >
                Cargar
            </Button>

            { open && openModal &&
                    <AlertDialogSlide
                        action={handleStartUploadAllPdf}
                        closeModal={onCloseModal}
                        openModal={open}
                    />
            }
        </Box>
    );
};
