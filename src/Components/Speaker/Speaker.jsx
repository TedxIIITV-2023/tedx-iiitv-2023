import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Speaker.scss";
import Card from "./Cards/Card";
import data from "./data.json";
import Footer from "../Footer/Footer";
import MobileFooter from "../Footer/MobileFooter/MobileFooter";

function Speaker() {
  const [showDetails, setShowDeatils] = React.useState(false);
  const [cardData, setcardData] = React.useState(null);

  const clearState = () => {
    setShowDeatils(false);
    setcardData(null);
  };

  const onCardClick = (data) => {
    console.log(data);
    setcardData(data);
    setShowDeatils(true);
  };

  const cards = data.map((card) => {
    return (
      <div onClick={() => onCardClick(card)}>
        <Card name={card.name} subtitle={card.subtitle} imgSrc={card.photo} link={card.link} />
      </div>
    );
  });
  return (
    <>
      <Navbar />

      <div className="speakers">
        
      </div>
      <Footer />
      <MobileFooter />
    </>
  );
}

export default Speaker;
