import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Title} from './Title';

const meta: Meta<typeof Title> = {
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Basic: Story = {args: {}};
