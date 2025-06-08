import { PerksTypes } from "@/types/PerksTypes";
import React from "react";
import Image from "next/image";

export const PerksComponent: React.FC<PerksTypes> = ({
  name,
  image,
  description,
  direction
}) => {
  return (
    <>
      <div className="flex bg-white items-center justify-center drop-shadow-2xl rounded-sm h-[500px] w-[1000px] transition-all delay-75 ease-in-out duration-300 hover:-translate-y-2 hover:scale-110 ">
        <div className={`flex ${direction === 'Right' ? 'flex-row-reverse' : 'flex-row'} justify-between items-center w-full px-8`}>
          <div>
            <Image
              className="object-cover h-[450px] w-96 rounded-sm"
              src={image}
              alt={description}
            />
          </div>
          <div className="flex-1 flex items-center justify-center flex-col text-center">
              <h1 className="text-black font-bold text-2xl">{name}</h1>
              <p className="mt-4 text-md font-semibold">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
