import { CardComponents } from "@/types/CardComponents"; 
import React from "react";  

export const CardComponet: React.FC<CardComponents> = ({name, description}) => {     
    return (         
        <div className="flex flex-col justify-between bg-white drop-shadow-2xl rounded-md h-62 mx-auto w-96 p-6 text-left  transition delay-150 duration-300 ease-in-out hover:-traslate-y-1 hover:scale-105">
            <div className="flex flex-col">
                <h1 className="font-bold text-2xl text-black leading-tight mb-3">{name}</h1>
                <p className="font-medium text-black leading-relaxed flex-1">{description}</p>
            </div>
        </div>
    ) 
}