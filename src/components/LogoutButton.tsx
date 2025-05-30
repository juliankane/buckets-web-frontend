import {preload} from 'react-dom';
import { useUserStore } from '@store/userStore';


export function LogoutButton({className}:{className: string}) {
    const clearUser = useUserStore((state) => state.clearUser);

    const onClick = () => {
        preload('/', {as:"document"})
        clearUser()
    }

    return (
        <button className={className} onClick={onClick}>Logout</button>
    )
}