import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CoinDetail() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((res) => {
      setCoin(res.data);
    });
  }, [id]);

  if (!coin) return <div className="text-center">Loading...</div>;

  return (
    <div className="card p-4">
      <img src={coin.image.large} alt={coin.name} style={{ width: 100 }} />
      <h3>{coin.name}</h3>
      <p>Market Cap Rank: {coin.market_cap_rank}</p>
      <p>High 24h: ${coin.market_data.high_24h.usd}</p>
      <p>Low 24h: ${coin.market_data.low_24h.usd}</p>
    </div>
  );
}