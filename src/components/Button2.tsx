import React from 'react';

interface Button2Props {
    title: string;
}

const Button2: React.FC<Button2Props> = ({ title }) => {
    return (
        <button className="flex flex-row items-center gap-2 bg-transparent border-none outline-none p-0 h-[4rem] w-[14rem]">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <span className="text-body font-medium">
                {title}
            </span>
        </button>
    );
}

export default Button2;
