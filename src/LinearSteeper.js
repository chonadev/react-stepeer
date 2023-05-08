import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { DataContext } from './context/DataContext';

export function LinearSteeper() {
  const theme = useTheme();
  
  const { activeStep, setActiveStep } = useContext(DataContext);

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="bottom"
      activeStep={activeStep}
      sx={{ maxWidth: '100%', flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={() => setActiveStep( activeStep + 1)} disabled={activeStep === 5}>
          Siguiente
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={() => setActiveStep( activeStep - 1)} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Atras
        </Button>
      }
    />
  );
}