

import {ChangeEvent} from "react";

interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}
 export const Input  = ({ value, onChange, placeholder, className }: InputProps) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
        />
    );
};
