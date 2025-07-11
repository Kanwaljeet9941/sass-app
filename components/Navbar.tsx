import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Navitems from "@/components/Navitems";
import {SignedOut,SignedIn,SignInButton,UserButton} from "@clerk/nextjs";



const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href='/public'>
                <div className="flex items-center gap-2.5 cursor-pointer"><Image src="/images/logo.svg" alt="logo" width={46} height={46}/></div>
            </Link>
            <div className="flex items-center gap-8">
                <Navitems/>
                <SignedOut>
                    <SignInButton>
                        <button className="btn-signin">Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navbar;