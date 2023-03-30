import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
    const { image, name, title, desc } = props;
    const [showFullDesc, setShowFullDesc] = useState(false);
    
    const toggleFullDesc = () => {
    setShowFullDesc(!showFullDesc);
};
    return (
        <div class="bg-blend-multiply shadow-inner shadow-md shadow-red-600 group h-80 w-80 align-center justify-center [perspective:1000px] ">
        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div class="absolute inset-0">
            <img class="h-[80%] w-full rounded-xl object-contain shadow-xl shadow-black/40" img src={image} alt={name} />
          </div>
          <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div class="flex min-h-full flex-col items-center justify-center">
              <h1 class="text-3xl font-bold">{name}</h1>
              <p class="text-lg">{title}</p>
              {showFullDesc ? (
              <div>
                <p className="text-sm">{desc}</p>
                <button
                  className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                  onClick={toggleFullDesc}
                >
                  Read Less
                </button>
              </div>
            ) : (
              <div>
                <p className="text-sm">{desc.slice(0, 100)}...</p>
                <button
                  className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                  onClick={toggleFullDesc}
                >
                  Read More
                </button>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;

// <div className="Card w-[70%] lg:w-[20%] m-auto">
        //     <div className="Card-inner">
        //         <div className="Card-front">
        //             <div>
        //                 <img src={image} alt={name} />
        //             </div>
        //             <div className="text-[1.8rem]">
        //                 {name}
        //             </div>
        //             <div className="text-[1.2rem]">
        //                 {title}
        //             </div>
        //         </div>

        //         <div className="Card-back">
        //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dolorem numquam sed voluptates possimus nihil corporis consectetur ullam, culpa, delectus error esse, doloremque quos magni.
        //         </div>

        //     </div>
        // </div>/