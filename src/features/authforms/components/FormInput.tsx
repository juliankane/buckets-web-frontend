/** Input for forms */ 

import {  useController, UseControllerProps } from "react-hook-form";
import { AuthType } from "../types"
import clsx from 'clsx';
import { FC } from "react";

type FormInputProps = {
    header?: string | false
} & UseControllerProps<AuthType>


const FormInput: FC<FormInputProps> = ({header=false, ...rest}) => {
    const { field, fieldState } = useController( rest );


     return ( 
        <>  
            {header && 
                <label htmlFor="password" className="mb-2 text-md font-medium text-text-muted">
                    {header}
                </label>}

            <input {...field} className={clsx( 'w-full rounded-lg border-none bg-black-warm px-4 py-1.5 text-lg text-text-primary', 
                'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25' )
            }
            />

            <div className="min-h-[1.5rem] text-sm text-bucket-red">
                    {fieldState.error && 
                        <p>{fieldState.error.message}</p>}
            </div>
        </>
    )
}

export {FormInput}


