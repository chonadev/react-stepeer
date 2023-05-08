import { useContext } from "react";
import { DataContext } from "./context/DataContext";
import Swal from 'sweetalert2';
import { Box, Button, InputAdornment, TextField } from "@mui/material";

export function StepForms() {

    const { activeStep } = useContext(DataContext);

    const handleAlert = () => {
        Swal.fire({
            title: 'Felicidades!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Pedido realizado'
        })
    }

    const handleActiveSelected = (stepSelected) => {
        if (stepSelected === 0) {
            return (
                <Box>
                    <h1> Formulario 0</h1>
                    <TextField
                        label="Formulario 0"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                    />
                </Box>
            )
        } else if (stepSelected === 1) {
            return (
                <Box>
                    <h1> Formulario 1</h1>
                    <TextField
                        label="Formulario 1"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                    />
                </Box>
            )
        } else if (stepSelected === 2) {
            return (
                <Box>
                    <h1> Formulario 2</h1>
                    <TextField
                        label="Formulario 2"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                    />
                </Box>
            )
        } else if (stepSelected === 3) {
            return (
                <Box>
                    <h1> Formulario 3 Final </h1>
                    <TextField
                        label="Formulario 3"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                    />
                    <Button onClick={handleAlert}> Finalizar </Button>
                </Box>
            )
        } 
        
    }

    return (
        <div>
            {handleActiveSelected(activeStep)}
        </div>
    );
    
}