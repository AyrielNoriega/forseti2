import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { LiabilitiesComponent } from './components/liabilities.component';
import { GeneralTemplate } from '../../components/templates/general.template';
import { DataGridPDF } from './components/data-grid-pdf.component';


export const HomePage = () => {
    return (
        <GeneralTemplate>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Paper sx={{ p: 2, mb: 2, display: 'flex', flexDirection: 'column' }}>
                    <DataGridPDF />
                </Paper>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <LiabilitiesComponent />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </GeneralTemplate>
    );
};
