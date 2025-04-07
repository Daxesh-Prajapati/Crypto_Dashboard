import React from "react";

const CoinCard = ({ coin, onClick }) => (
  <div className="col-md-4 mb-3">
    <div className="card h-100 shadow-sm" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="card-body text-center">
        <img src={coin.image} alt={coin.name} width={50} className="mb-2" />
        <h5 className="card-title">{coin.name}</h5>
        <p className="card-text">${coin.current_price.toFixed(2)}</p>
      </div>
    </div>
  </div>
);

export default CoinCard;
