import "./style.css";
import cardBack from "../../assets/card-back.png";

export default function CardsContainer({ card, arrCards, setArrCards }) {

  const handleTurnCard = () => {
    const newCards = [...arrCards];

    const current = newCards.find((x) => x.id === card.id);

    const trueCards = newCards.filter((x) => x.turned);

    if (trueCards.length > 1) {
      return;
    }

    if (trueCards.length && card.slug === trueCards[0].slug) {
      current.turned = !current.turned;
      setArrCards(newCards);

      setTimeout(() => {
        clearCards(current, trueCards[0], newCards);
      }, 500);

      return;
    }

    current.turned = !current.turned;
    setArrCards(newCards);

    if (trueCards.length) {

      setTimeout(() => {
        newCards.forEach((x) => {
          x.turned = false;
      });

        setArrCards([...newCards]);
      }, 1500);
    }

    function clearCards(card1, card2, newCards) {
      if (card1.id === card2.id) {
        return;
      }

      const filteredCards = newCards.filter(
        (x) => x.id !== card1.id && x.id !== card2.id
      );

      setArrCards(filteredCards);
    }
  }

  return (
    <div className="card-box-container">
      <img
      className="card-box"
        src={card.turned ? card.image : cardBack}
        alt="card"
        onClick={() => handleTurnCard()}
      />
    </div>
  );
}
