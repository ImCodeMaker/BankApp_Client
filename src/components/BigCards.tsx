import { BigCardTypes } from "@/types/BigCard";
import Image from "next/image";

export const BigCards: React.FC<BigCardTypes> = ({
  name,
  image,
  description,
}) => {
  return (
    <>
      <div className="bg-white h-56 w-96 flex items-center justify-center drop-shadow-2xl p-4 rounded-lg">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-shrink-0">
            <Image
              src={image}
              alt={description || name}
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-lg text-gray-900">{name}</h1>
            {description && (
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
