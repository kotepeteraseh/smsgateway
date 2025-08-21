
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    onIconClick?: () => void;
}

const Input: React.FC<InputProps> = ({ icon, onIconClick, ...props }) => {
    return (
        <div className="relative w-full">
            <input
                className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...props}
            />
            {icon && (
                <div 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={onIconClick}
                >
                    {icon}
                </div>
            )}
        </div>
    );
};

export default Input;
