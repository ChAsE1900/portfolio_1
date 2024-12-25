import { transform } from "next/dist/build/swc";
import { PropsWithChildren} from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({children, size, rotation, shouldOrbit,orbitduration, spinduaration, shouldspin  }: PropsWithChildren<{size: number; rotation: number;shouldOrbit?: boolean;orbitduration?:string;spinduaration?:string; shouldspin?: boolean;}>) => {
    return(
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
         <div className={twMerge(shouldOrbit === true && "animate-spin")} style={{
          animationDuration: orbitduration,
         }}>
         <div className="flex items-start justify-start" style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`
         }}>
          <div className={twMerge( shouldspin === true && "animate-spin")} style={{animationDuration: spinduaration}}>
          <div className="inline-flex" style={{
            transform: `rotate(${rotation * -1}deg)`,
          }}>{children}</div>
          </div>
          </div>
          </div>
        </div>
    )
}