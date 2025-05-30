import React, { RefObject} from 'react';
import { Button } from './Button';


export type ModalProps = {
    children?: React.ReactNode;
    heading?: string;
    type?: "submit" | "save"
    isOpen?: boolean
    ref?: RefObject<HTMLDivElement | null>;
};

export function Modal({ref, children, heading="Undefined Title", type}: ModalProps) {
    const SaveFooter = () => {
        return(
            <div className="flex justify-end gap-2 mt-4">
                <Button size="m" color="gray">Close</Button>
                <Button size="m" color="blue">Save</Button>
            </div>
        )
    }

    const SubmitFooter = () => {
        return(
            <div className="flex justify-end mt-4">
                <Button size="m" color="blue">Save</Button>
            </div>
        )
    }

    return(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 mb-100">
            <div
                ref={ref}
                className="bg-white rounded-lg shadow-2xl min-w-[25%] p-6"
            >
                <h2 className="text-xl font-semibold mb-4">{heading}</h2>
                {children}
                {type === "submit" && <SubmitFooter />}
                {type === "save" && <SaveFooter />}
            </div>
            </div>

    );
};