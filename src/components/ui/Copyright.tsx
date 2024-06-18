import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { SxProps } from '@mui/system';

interface CopyrightProps {
    sx?: SxProps;
}
export const Copyright = (props: CopyrightProps) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                Rentek
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};
