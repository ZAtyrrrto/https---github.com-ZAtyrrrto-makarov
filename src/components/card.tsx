import Link from "next/link"
import React from "react"

export interface CardProps {
    company?: number;
    companya?: string;
    title?: string;
    text?: string;
}

export const Card: React.FC<CardProps> = ({ company, companya, title, text}) => {
    return(
        <div className="p-6 shadow-xs text-zinc-900 bg-gray-50 rounded-2xl">
            <div aria-label="Main info" className="flex flex-col gap-4 ">
                <div aria-label="Company" className="w-fit text-xs font-bold border border-gray-300 border-solid rounded-lg px-2 py-1 mb-8">
                    <span className="pr-1 text-gray-500">{company}</span>
                    <span className="text-gray-700">{companya}</span>
                </div>
                <div aria-label="Название объявления" className="w-full">
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <div aria-label="Критерии" className="w-full">
                    <p className="text-gray-600 text-sm">{text}</p>
                </div>
            </div>
        </div>
    )
}