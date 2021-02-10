import React from 'react';
import type { Story } from '@storybook/react';

import DevComponent from './DevComponent';

export default {
  title: 'DevComponent',
  component: DevComponent,
};

type DevComponentProps = React.ComponentProps<typeof DevComponent>;

const Template: Story<DevComponentProps> = (args) => <DevComponent {...args} />;

export const Default = Template.bind({});
