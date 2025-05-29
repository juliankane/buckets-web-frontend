import React from "react";
import type { InputHTMLAttributes } from "react";


type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;

const SearchBar: React.FC<SearchBarProps> = ({ className, onChange, ...props }) => {
    return (
        <input
            className={className}
            onChange={onChange}
            type="search"
            {...props}
        />
    );
};

export  {SearchBar};
