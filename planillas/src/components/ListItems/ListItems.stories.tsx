import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ListItems} from './ListItems';

const meta: Meta<typeof ListItems> = {
  component: ListItems,
};

export default meta;

type Story = StoryObj<typeof ListItems>;

export const Basic: Story = {args: {}};
