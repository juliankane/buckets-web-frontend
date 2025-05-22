import type { Meta, StoryObj } from '@storybook/react';
import {DropdownSelect} from '@components/dropdown-select';


const meta: Meta<typeof DropdownSelect> = {
    title: 'Components/DropdownSelect',
    component: DropdownSelect
};

export default meta;

type Story = StoryObj<typeof DropdownSelect>;
export const Default: Story = {
    args: {
        label: 'Select an option',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
        onSelect: (selectedItem: unknown) => {
            console.log("Selected item:", selectedItem);
        }
    },
}