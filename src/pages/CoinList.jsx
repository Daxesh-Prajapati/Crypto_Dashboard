import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCoins, getCoinDetails, clearSelectedCoin } from "../features/coins/coinSlice";
import CoinCard from "../components/CoinCard";
import CoinDetailModal from "../components/CoinDetailModal";
import SearchBar from "../components/SearchBar";

const CoinList = () => {
  const dispatch = useDispatch();
  const { items, page, loading, searchQuery, selectedCoin } = useSelector((state) => state.coins);
  const loader = useRef();

  useEffect(() => {
    dispatch(loadCoins(page));
  }, [dispatch]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && !loading) {
      dispatch(loadCoins(page));
    }
  }, [dispatch, page, loading]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1.0 });
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  const filteredCoins = items.filter(coin =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coin.current_price.toString().includes(searchQuery)
  );

  return (
    <div className="container mt-4">
      <SearchBar />
      <div className="row">
        {filteredCoins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} onClick={() => dispatch(getCoinDetails(coin.id))} />
        ))}
      </div>
      {loading && <p className="text-center">Loading...</p>}
      <div ref={loader} />
      {selectedCoin && (
        <CoinDetailModal coin={selectedCoin} onClose={() => dispatch(clearSelectedCoin())} />
      )}
    </div>
  );
};

export default CoinList;
