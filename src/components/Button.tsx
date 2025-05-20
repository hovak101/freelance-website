import React from 'react';

interface ButtonProps {
    title: string;
}

const Button: React.FC<ButtonProps> = ({title}) => {
    return (
        <button className="bg-primary text-white px-9 py-4 h-[4rem] w-[14rem] rounded-lg flex items-center justify-center">
            <div>
                {title}
            </div>
        </button>
    );
}

export default Button;
