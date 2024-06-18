import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { TransitionProps } from '@mui/material/transitions';
import { green, red } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface AlertDialogSlideProps {
    action: () => void;
    closeModal: () => void;
    openModal: boolean;
}


export const AlertDialogSlide = ({ action, closeModal, openModal }: AlertDialogSlideProps) => {

    const { messageModal, isSaving, errorMessage } = useSelector((state: RootState ) => state.serviceLayer);

    return (
        <Dialog
            open={openModal}
            TransitionComponent={Transition}
            keepMounted
            // onClose={OnClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{ errorMessage ? "Error" : "Confirmar" }</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {
                        errorMessage
                            ? errorMessage
                            : messageModal
                    }
                </DialogContentText>
            </DialogContent>

            {
                isSaving
                    ? (
                        <LoadingButton
                            loading
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="outlined"
                            sx={{ margin: 1, backgroundColor: green[500] }}
                        >
                                Guardando
                        </LoadingButton>
                    )
                    : (
                        <DialogActions>
                            <Button
                                onClick={closeModal}
                                variant="outlined"
                                sx={{ color: red[500], borderColor: red[500] }}
                            >
                                Cancelar
                            </Button>
                            {
                                !errorMessage && (
                                    <Button
                                        onClick={action}
                                        variant="contained"
                                        sx={{ color: 'white', backgroundColor: green[500] }}
                                    >
                                        Continuar
                                    </Button>
                                )
                            }
                        </DialogActions>
                    )
            }
        </Dialog>
    );
};
