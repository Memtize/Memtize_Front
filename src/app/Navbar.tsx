import React from 'react';
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";

type NavbarProps = {
    // You can define props here if needed
};

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <>
            <header className='flex-none'>
                <nav className='relative mx-auto p-6'>
                    <div className='flex items-center justify-between'>
                        <div className='py-2'>
                            <img src="img/logo.svg" alt="Logo" />
                        </div>
                        <div className='hidden md:flex space-x-6 items-center text-stone-400'>
                            <a href='/about' className='hover:text-cyan-400'><p className='align-middle'>ABOUT</p></a>
                            <a href='/admin' className='hover:text-cyan-400'>ADMIN</a>
                            {/* <ConnectButton
                                client={client}
                                appMetadata={{
                                    name: "Example App",
                                    url: "https://example.com",
                                }}
                            /> */}
                            <a href='#' className='hover:text-cyan-400'>THEME</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
