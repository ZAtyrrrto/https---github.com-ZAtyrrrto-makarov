import { Container } from "@/components/container";
import React from "react";

interface HeaderProps {
    className?: string;
    children: React.ReactNode
}

export function Header({className, children}: HeaderProps){
    return(
        <header className={"py-5 w-full bg-gray-800 border-b border-b-gray-600" + className}>
            <Container className="flex items-center justify-between gap-4">
                {children}
            </Container>
        </header>
    );
}