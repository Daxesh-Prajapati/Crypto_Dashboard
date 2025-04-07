import React from "react";
import { Modal, Button } from "react-bootstrap";

const CoinDetailModal = ({ coin, onClose }) => (
  <Modal show={true} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>{coin.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img src={coin.image.large} alt={coin.name} className="img-fluid mb-3" />
      <p><strong>Market Cap Rank:</strong> {coin.market_cap_rank}</p>
      <p><strong>High (24h):</strong> ${coin.market_data.high_24h.usd}</p>
      <p><strong>Low (24h):</strong> ${coin.market_data.low_24h.usd}</p>
      <p><strong>Description:</strong> {coin.description.en?.split(".")[0]}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>Close</Button>
    </Modal.Footer>
  </Modal>
);

export default CoinDetailModal;
