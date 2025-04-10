import ShipmentCreationStepper from '@/shared/ui/steppers/shipment/ShipmentCreationStepper';
import { IStep } from '@/shared/ui/steppers/types';
import Container from '@mui/material/Container';
import FormFieldsStep_1 from './FormFieldsStep_1';
import ShipmentPostForm from '@/shared/ui/forms/shipment/ShipmentPostForm';

import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import FormFieldsStep_2 from './FormFieldsStep_2';

const ShipmentPostCreator = () => {
  const steps: IStep[] = [
    {
      label: 'Gago',
      content: <FormFieldsStep_1 />,
      icon: <SettingsIcon />,
    },
    {
      label: 'Mago',
      content: <FormFieldsStep_2 />,
      icon: <GroupAddIcon />,
      optional: true,
    },
    {
      label: 'Vugo',
      content: <>"Vugo"</>,
      icon: <VideoLabelIcon />,
    },
    {
      label: 'Viko',
      content: <>"Viko"</>,
      icon: <SettingsIcon />,
    },
    {
      label: 'Ziko',
      content: <>"Ziko"</>,
      icon: <SettingsIcon />,
    },
    {
      label: 'Cisco',
      content: <>"Cisco"</>,
      icon: <SettingsIcon />,
    },
  ];

  return (
    <Container maxWidth={'lg'}>
      <ShipmentPostForm>
        <ShipmentCreationStepper steps={steps} />
      </ShipmentPostForm>
    </Container>
  );
};

export default ShipmentPostCreator;
