import React, { useState } from 'react';
import { TextField } from '@mui/material';


export const CurrencyInput = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        const formattedValue = formatCurrency(rawValue);

        setInputValue(formattedValue);
    };

    const formatCurrency = (value: string): string => {
        // Eliminar caracteres no numéricos
        const numericValue = value.replace(/[^0-9]/g, '');

        // Convertir a número
        const numberValue = parseInt(numericValue);

        // Formatear como moneda COP
        const formattedValue = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
        }).format(numberValue / 100); // Dividir por 100 para manejar centavos

        return formattedValue;
    };

    return (
        <TextField
            type="text"
            size="small"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="0"
            InputProps={{
                inputProps: {
                    inputMode: 'numeric',
                    pattern: '[0-9]*',
                },
            }}
        />
    );
};
