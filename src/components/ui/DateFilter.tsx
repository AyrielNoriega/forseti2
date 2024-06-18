import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Stack, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';

import { RootState } from '../../store/store';

interface DateFilterProps {
    onChange: (startDate: string) => void;
}

export const DateFilter = ({ onChange }: DateFilterProps) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Los meses van de 0 a 11, sumamos 1 para obtener el mes actual
    const date = `${currentYear}-${currentMonth.toString().padStart(2, '0')}`;
    const currentDate1 = new Date(date);

    const { filterLoader } = useSelector((state: RootState ) => state.serviceLayer);


    const [startDate, setStartDate] = useState<Date>(currentDate1);

    const handleFilterChange = () => {
        // Formatea la fecha al formato "YYYY-mm-dd"
        const formattedDate = startDate.toISOString().split('T')[0];

        onChange(formattedDate);

    };

    return (
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <TextField
                label="Fecha de inicio"
                type="month"
                value={startDate ? startDate.toISOString().split('T')[0].substring(0, 7) : ''} // Selecciona solo año y mes
                onChange={(e) => setStartDate(new Date(e.target.value))}
                InputLabelProps={{ shrink: true }}
                size="small"
            />
            <LoadingButton
                variant="contained"
                onClick={handleFilterChange}
                loading={filterLoader}
                loadingPosition="start"
                startIcon={<SearchIcon />}
            >
                {
                    filterLoader
                        ? "Buscando"
                        : "Buscar"
                }
            </LoadingButton>
        </Stack>

    );
};
