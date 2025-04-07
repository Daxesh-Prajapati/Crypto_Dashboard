import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CoinCard({ coin }) {
  const navigate = useNavigate();
  return (
    <div className="col-md-4 mb-4">
      <div className="card p-3" onClick={() => navigate(`/coin/${coin.id}`)} style={{ cursor: 'pointer' }}>
        <h5>{coin.name}</h5>
        <p>Price: ${coin.current_price}</p>
        <p>High (24h): ${coin.high_24h}</p>
        <p>Low (24h): ${coin.low_24h}</p>
      </div>
    </div>
  );
}