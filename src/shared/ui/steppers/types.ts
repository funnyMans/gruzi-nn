import { ReactElement } from 'react';

export interface IStep {
  label: string;
  content: ReactElement;
  icon: ReactElement;
  optional?: boolean;
}
