import { type ModalProps, Modal } from './Modal';
import { type ButtonProps} from './Button';
import { PencilIcon } from '@heroicons/react/24/outline';


import  {  useRef, useState } from 'react';
import { useClickOutside } from '@hooks/useClickOutside';

type ModalPromptProps = ModalProps & ButtonProps

export function ModalPrompt({ heading, children, type, /// <reference path="" />
}: ModalPromptProps) {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    useClickOutside([modalRef], () => setIsOpen(false));


    const handldeClick = () => {
        setIsOpen(true)
    }

    return(
        <>
      
            <button className="rounded-full bg-bucket-aqua hover:bg-bucket-aqua/30" onClick={handldeClick}>
                <PencilIcon className='size-12 stroke-white '/>
            </button>
         

            {isOpen && 
            <Modal ref={modalRef} type={type} heading={heading}>
                {children}
            </Modal>}
        </>


    );
};