import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCoinDetail } from '../services/api';
import { Container, Image, Table } from 'react-bootstrap';

const CoinDetail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const getCoinDetail = async () => {
      const data = await fetchCoinDetail(id);
      setCoin(data);
    };
    getCoinDetail();
  }, [id]);

  if (!coin) return <p>Loading...</p>;

  return (
    <Container className="coin-detail">
      <h1>{coin.name}</h1>
      <Image src={coin.image.large} alt={coin.name} />
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Market Cap Rank</td>
            <td>{coin.market_cap_rank}</td>
          </tr>
          <tr>
            <td>Current Price</td>
            <td>${coin.market_data.current_price.usd}</td>
          </tr>
          <tr>
            <td>High (24h)</td>
            <td>${coin.market_data.high_24h.usd}</td>
          </tr>
          <tr>
            <td>Low (24h)</td>
            <td>${coin.market_data.low_24h.usd}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default CoinDetail;
