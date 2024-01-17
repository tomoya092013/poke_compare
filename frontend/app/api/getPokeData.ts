import axios from 'axios';

import { Poke, PokeUrl } from '../type/poke';

const getPokeData = async (pokeUrl: PokeUrl): Promise<Poke> => {
  const res = await axios.get(pokeUrl.url);
  const convertRes = {
    id: res.data.id,
    img: res.data.sprites.front_default,
    types: res.data.types.map(
      (target: { type: { name: string } }) => target.type.name
    ),
    speciesUrl: res.data.species.url,
    hp: res.data.stats[0].base_stat,
    attack: res.data.stats[1].base_stat,
    defence: res.data.stats[2].base_stat,
    specialAttack: res.data.stats[3].base_stat,
    specialDefence: res.data.stats[4].base_stat,
    speed: res.data.stats[5].base_stat,
  };
  return convertRes;
  // } catch (error) {
  //   console.error(error);
  // }
};

export default getPokeData;
