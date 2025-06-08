import { StartAccountTypes } from "@/types/StartAccountCardType";
import React from "react";

export const StartAccountComponent: React.FC<StartAccountTypes> = ({number, name, description}) => {
    return (
        <>
        <div className="flex justify-center items-start flex-col drop-shadow-2xl bg-white h-56 m-4 rounded-2xl w-96 p-6 transition delay-150 duration-300 ease-in-out hover:-traslate-y-1 hover:scale-110">
            <div className="flex items-start flex-col ">
                <h1 className="text-6xl font-bold text-black">{number}</h1>
                <span className="text-black text-2xl">{name}</span>
                <p className="w-82 font-normal text-base">{description}</p>
            </div>
        </div>
        </>
    )
}