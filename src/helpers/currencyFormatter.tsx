

export const currencyFormatter = (value: number): string => {
    const formattedValue = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
    }).format(value);

    return formattedValue;
};
