import { format } from 'date-fns';

// Formata a data no padrão DD/MM/AAAA
export const formatLocalDate = (date, pattern) => {
    const dt = new Date(date);
    const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
    return format(dtDateOnly, pattern);
}