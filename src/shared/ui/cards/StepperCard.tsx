import {
  Button,
  ButtonGroup,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material';
import Card from '@mui/material/Card';
import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { IStep } from '../steppers/types';

interface IProps {
  steps: IStep[];
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
}
const StepperCard = ({ steps, activeStep, setActiveStep }: IProps) => {
  const [skipped, setSkipped] = useState(new Set<number>());
  const isStepOptional = useMemo(() => {
    return activeStep <= steps.length ? steps[activeStep].optional : false;
  }, [steps, activeStep]);

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  return (
    <Card
      elevation={1}
      sx={{ minHeight: '70vh', display: 'flex', flexDirection: 'column' }}
    >
      <CardHeader title={steps[activeStep].label} />
      <CardContent sx={{ flex: 1 }}>{steps[activeStep].content}</CardContent>
      <CardActions>
        <ButtonGroup fullWidth>
          <Button onClick={handleBack} disabled={!activeStep}>
            Go Back
          </Button>
          <Button onClick={handleSkip} disabled={!isStepOptional}>
            Skip
          </Button>
          <Button onClick={handleNext}>Next Step</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default StepperCard;
