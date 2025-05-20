import React from 'react';

const Navbar = () => {
    return (
        <div className="">
            <header className="">
                <nav className="flex">
                    <div className="flex items-center gap-1">
                        <img src="/logo.svg" alt="logo" className="w-10"/>
                        <div className="text-lg font-semibold">
                            Name
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
