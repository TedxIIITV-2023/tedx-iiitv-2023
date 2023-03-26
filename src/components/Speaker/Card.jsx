import React from "react";
import "./Card.css";
const Card = (props) => {
    const { image, name, title } = props;

    return (
        <div className="Card w-[70%] lg:w-[20%] m-auto">
            <div className="Card-inner">
                <div className="Card-front">
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

                <div className="Card-back">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dolorem numquam sed voluptates possimus nihil corporis consectetur ullam, culpa, delectus error esse, doloremque quos magni.
                </div>

            </div>
        </div>
    );
}

export default Card;