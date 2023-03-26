import React from "react";
import "./Card.css";
const Card = (props) => {
    const {image, name, title} = props;

    return (
        <div className="Card w-[70%] lg:w-[20%] m-auto">
            <div>
                <img src={image} alt={name} />
            </div>
            <div className="text-[1.8rem]">
                {name}
            </div>
            <div className="text-[1.2rem]">
                {title}
            </div>
        </div>
    ); 
}

export default Card;