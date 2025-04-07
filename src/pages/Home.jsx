import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../redux/coinSlice';
import CoinCard from '../components/CoinCard';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';

export default function Home() {
  const dispatch = useDispatch();
  const { coins, status } = useSelector((state) => state.coin);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCoins(page));
  }, [dispatch, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filtered = coins.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase()) ||
    coin.current_price.toString().includes(query)
  );

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      {status === 'loading' && <Loader />}
      <div className="row">
        {filtered.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
}