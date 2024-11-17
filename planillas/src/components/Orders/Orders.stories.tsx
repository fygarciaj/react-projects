import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Orders} from './Orders';

const meta: Meta<typeof Orders> = {
  component: Orders,
};

export default meta;

type Story = StoryObj<typeof Orders>;

export const Basic: Story = {args: {}};
