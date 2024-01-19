import axios from 'axios';

import { GenerationNo } from '../type/poke';

const getPokeUrlList = async (pokeNo: GenerationNo) => {
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
