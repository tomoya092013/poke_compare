import axios from 'axios';

import { PokeNo } from '../type/poke';

const getPokeUrlList = async (pokeNo: PokeNo) => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${pokeNo.end}&offset=${pokeNo.start}`
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export default getPokeUrlList;
