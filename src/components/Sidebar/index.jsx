import "./style.css";
import logo from "../../assets/logo.svg";

export default function Sidebar({ setArrCards, cards }) {


  const handleReset = () => {
    
    cards.forEach((card) => {
      card.turned = false;
    });

    setArrCards(cards);
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <img src={logo} alt="Botão de Reset" />
        <h1 className="sidebar-title">Puzzle</h1>
      </div>
      <button className="sidebar-reset-btn" onClick={() => handleReset()}>
        RESET
      </button>
    </div>
  );
}
