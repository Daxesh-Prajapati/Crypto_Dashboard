import axios from 'axios';

export const fetchCoinDetail = async (id) => {
  const res = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );
  return res.data;
};