import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


export const CollapseAlert = () => {

    const { saveAlert} = useSelector((state: RootState ) => state.serviceLayer);

    return (
        <Collapse in={saveAlert}>
            <Alert sx={{ mb: 2 }} >
                Asiento contable guardado en SAP
            </Alert>
        </Collapse>
    );
};
