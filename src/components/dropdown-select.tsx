import { Select, Label, Field, } from '@headlessui/react';



export type DropDownSelectProps = {
    label?: string;
    options: {label: string, value: string}[];
    onSelect: (option: any) => void;
}


export function DropdownSelect( 
    { 
     label, 
     options, 
     onSelect = () => {}, }: DropDownSelectProps ) {

    return (    // flex-col for verticle label
        
        <div className="mx-auto h-screen pt-20">
            <Field className="flex items-center space-x-4 "> 
                {label && <Label className="text-sm font-medium text-gray-700">{label}</Label>}
                <div className="w-52">
                    <Select
                        name={label}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        {options.map((option, index) => (
                            <option 
                                key={index} 
                                value={option.value} 
                                className="text-gray-700"
                                onClick={() => onSelect(option)}
                            >
                                {option.label}
                            </option>
                        ))}
                    </Select>
                </div>
                </Field>

            
        </div>

        
    );
}   
