import React from 'react';
import BottomButtons from './bottom-buttons';

export default {
  title: 'Components/Multichain/BottomButtons',
  component: BottomButtons,
  argTypes: { isPrimaryDisabled: { control: 'boolean' } },
};

export const Default = (args) => <BottomButtons {...args} />;
