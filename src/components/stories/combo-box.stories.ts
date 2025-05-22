import type { Meta, StoryObj } from '@storybook/react';
import {ComboBox} from '@components/combo-box';

const meta: Meta<typeof ComboBox> = {
  title: 'Components/ComboBox',
  component: ComboBox,
};

export default meta;
type Story = StoryObj<typeof ComboBox>;
export const EmptyComboBox: Story = {
  args: {
    

    items: ["Item 1", "Item 2", "Item 3"],
    displayValue: (item:string) => item,
    onChange: (selectedItem: unknown) => {
      console.log("Selected item:", selectedItem);
    },
    placeholder: "helloworld",
    filter: (query: string, item: string) => item.toLowerCase().includes(query.toLowerCase()),

  },
};


