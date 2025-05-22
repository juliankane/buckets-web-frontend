import { useState } from 'react'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, ComboboxButton } from '@headlessui/react'
import {ChevronDown} from 'lucide-react'
import clsx from 'clsx'


export type ComboBoxProps<T> = {
    items: string[]
    displayValue: (item: string) => string
    onChange: (selectedItem: T) => void
    placeholder?: string
    filter?: (query: string, item: string) => boolean
}



export function ComboBox<T>({
    items,
    displayValue,
    onChange,
    placeholder = 'Select an option',
    filter = (query, item) => displayValue(item).toLowerCase().includes(query.toLowerCase()),
}: ComboBoxProps<T>) {
    const [query, setQuery] = useState('')
    const filteredItems = query === '' ? items : items.filter((item) => filter(query, item))

    return (
        <div className="mx-auto h-screen w-52 pt-20">

           <Combobox onChange={onChange} >
                <div className="relative">
                    <ComboboxInput  
                        className={clsx(
                            'w-full rounded-lg border-solid bg-black/25 py-1.5 pr-10 pl-3 text-sm text-black',
                            'focus:outline-solid-purple focus:ring-2 focus:ring-white/25'
                        )}
                        aria-label="Filter"
                        displayValue={(item: string) => displayValue(item)}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={placeholder}
                        />
                    <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ChevronDown className="w-4 h-4 text-black group-data-hover:text-white" />
                    </ComboboxButton>
                </div>

                <ComboboxOptions className="bg-black/5 empty:invisible">
                    {filteredItems.map((item, index) => (
                    <ComboboxOption key={index} value={item} className="data-focus:bg-white/25">
                        {displayValue(item)}
                    </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Combobox>
        </div>
            
    )
}
