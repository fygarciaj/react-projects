import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {TurnListColumn} from './TurnListColumn';

const meta: Meta<typeof TurnListColumn> = {
  component: TurnListColumn,
};

export default meta;

type Story = StoryObj<typeof TurnListColumn>;

export const Basic: Story = {args: {}};
