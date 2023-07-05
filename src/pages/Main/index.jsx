import CardsContainer from "../../components/CardsContainer";
import Sidebar from "../../components/Sidebar";
import congrats from "../../assets/congrats.png";
import cards from "../../cards";
import { useState } from "react";
import "./style.css";

function Main() {
  const [arrCards, setArrCards] = useState([...cards]);

  return (
    <div className="main-container">
      <div className="main-sidebar">
        <Sidebar cards={cards} setArrCards={setArrCards} />
      </div>
      <div className="main-cards-container">
          <div
            className="main-card-box"
            style={{
              justifyContent: `${arrCards.length ? "flex-start" : "center"}`,
            }}
          >
            {arrCards.length ? (
              arrCards.map((card) => (
                <CardsContainer
                  key={card.id}
                  card={card}
                  arrCards={arrCards}
                  setArrCards={setArrCards}
                />
              ))
            ) : (
              <img src={congrats} alt= "Parabéns!" />
            )}
          </div>
        </div>
    </div>
  );
}

export default Main;
