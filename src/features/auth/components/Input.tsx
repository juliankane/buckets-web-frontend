/** Input for forms */ 

import {  useController, UseControllerProps } from "react-hook-form";
import { AuthType } from "../types"
import clsx from 'clsx';

export function Input(props: UseControllerProps<AuthType>){
    const {  field, fieldState } = useController( props );
    return ( 
        <>  
            {/** dev-note ignore TS error here rn */}
            <input {...field} className={clsx( 'w-full rounded-lg border-none bg-black-warm px-4 py-1.5 text-lg text-text-primary', 
                'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25' )
            }
            />
            {/** error messages */}
            <div className="min-h-[1.5rem] text-sm text-bucket-red">
                    {fieldState.error && 
                        <p>{fieldState.error.message}</p>}
            </div>
        </>
    )
}