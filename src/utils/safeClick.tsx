import {MouseEvent} from 'react'

const safeClick = (handler: (e:MouseEvent) => void) => {
    return (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handler(e)
    }
}

export {safeClick}