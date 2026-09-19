import React from "react";

interface ContainerProps{
    className?: string;
    children?: React.ReactNode;
}

export function Container({ className="" , children } : ContainerProps){
    return(
        <div className={"px-4 mx-auto max-w-6xl " + className}>
            {children}
        </div>
    );
}