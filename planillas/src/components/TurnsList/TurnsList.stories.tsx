import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {TurnsList} from './TurnsList';

const meta: Meta<typeof TurnsList> = {
  component: TurnsList,
};

export default meta;

type Story = StoryObj<typeof TurnsList>;

export const Basic: Story = {args: {}};
