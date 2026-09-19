import React from "react";

interface FooterProps {
    className?: string;
    children: React.ReactNode
}

export function Footer({className, children}: FooterProps){
    return(
        <footer className={"w-full bg-blue-950 border-t border-t-gray-600" + className}>
            <h1 className="py-5 px-4 pr-370 flex justify-around border-b border-b-white font-bold text-3xl">Logo</h1>
            <div className="w-full py-5 justify-around ">
                {children}
            </div>
        </footer>
    )
}