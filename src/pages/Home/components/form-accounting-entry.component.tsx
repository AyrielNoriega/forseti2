
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert, Collapse } from '@mui/material';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { questions } from './questions';
import { FormTable } from './form-table.component';
import { RenderInput } from '../../../components/ui';

export const FormAccountingEntry = () => {
    console.log(questions);

    return (
        <Container
            component="main"
            // maxWidth="xs"
        >
            <Typography
                component="h1"
                variant="h5"
                sx={{
                    marginTop: 3,
                }}
            >
                Crear Asientos en SAP
            </Typography>
            <Box
                sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Formik

                    initialValues={{

                    }}

                    validationSchema={Yup.object().shape({
                       
                    })}
                    // , { setErrors, setStatus, setSubmitting, resetForm }
                    onSubmit={async (values) => {
                        try {
                            console.log(values);
                        } catch (err) {
                            console.log(err);
                        }
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <Box component="form" noValidate onSubmit={handleSubmit}>
                            {
                                questions.map((question, index) => (
                                    <RenderInput
                                        key={index}
                                        index={index}
                                        question={question}
                                        errors={errors}
                                        handleBlur={handleBlur}
                                        handleChange={handleChange}
                                        touched={touched}
                                        values={values}
                                    />
                                ))
                            }

                            <FormTable />

                            <Box>
                                <Button
                                    disabled={isSubmitting}
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Crear asiento
                                </Button>

                                <Box sx={{ width: '100%' }}>
                                    <Collapse in={isSubmitting}>
                                        <Alert sx={{ mb: 2, mt: 2 }}>
                                            Guardado
                                        </Alert>
                                    </Collapse>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Box>
        </Container>
    );
};
