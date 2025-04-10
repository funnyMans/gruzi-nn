'use client';
import { Fragment, memo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ColorlibStepIcon, { ColorlibConnector } from './ColorIcon';

import { IStep } from '../types';
import { useFormikContext } from 'formik';
import StepperCard from '../../cards/StepperCard';

interface IProps {
  steps: IStep[];
}
function ShipmentCreationStepper({ steps }: IProps) {
  const { values, submitForm } = useFormikContext();
  const [activeStep, setActiveStep] = useState(0);

  const stepIcon = memo((props: any) => (
    <ColorlibStepIcon {...props} steps={steps} />
  ));

  const handleConfirm = async () => {
    await submitForm();
    console.log({ values });
    setActiveStep(0);
  };

  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel
              slots={{
                stepIcon,
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button type='submit' onClick={handleConfirm}>
              Confirm Post
            </Button>
          </Box>
        </Fragment>
      ) : (
        <StepperCard
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      )}
    </Stack>
  );
}

export default ShipmentCreationStepper;
