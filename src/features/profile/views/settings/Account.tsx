import { ModalPrompt } from "@components/ModalPrompt";






export function Account() {



    return (
        <>
            <div className="justify-between flex"> 
                <span className="text-lg">Email </span>
                <ModalPrompt type="submit" >Undefined Inputs</ModalPrompt>
            </div>
        </>
    );
}