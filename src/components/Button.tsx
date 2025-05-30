import React from 'react';



const colorClasses: Record<'orange' | 'blue' | 'gray', string> = {
    orange: 'bg-orange-500 text-white',
    blue: 'bg-blue-500 text-white',
    gray: 'bg-black-warm text-white',
};

const sizeClasses: Record<'s' | 'm' | 'lg', string> = {
    s: 'px-2 py-1 text-sm',
    m: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
};



export type ButtonProps = {
    children?: React.ReactNode;
    color?: 'orange' | 'blue' | 'gray';
    size?: 's' | 'm' | 'lg';
};

export function Button({
    children,
    color = 'blue',
    size = 'm',
    ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const className = `${colorClasses[color]} ${sizeClasses[size]} rounded`;

    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
}