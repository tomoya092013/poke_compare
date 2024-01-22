import axios from 'axios';

import { PokeFlavorTextEntry, PokeJaData } from '../type/poke';

const getPokeJaData = async (targetUrl: string): Promise<PokeJaData> => {
  const res = await axios.get(targetUrl);
  const flavorTextEntries = res.data.flavor_text_entries;

  let flavorText = flavorTextEntries.filter((target: PokeFlavorTextEntry) => {
    return target.language.name === 'ja-Hrkt' && target.version.name === 'x';
  });
  if (flavorText.length === 0) {
    flavorText = flavorTextEntries.filter((target: PokeFlavorTextEntry) => {
      return (
        target.language.name === 'ja-Hrkt' &&
        target.version.name === 'omega-ruby'
      );
    });
  }
  if (flavorText.length === 0) {
    flavorText = flavorTextEntries.filter((target: PokeFlavorTextEntry) => {
      return (
        target.language.name === 'ja-Hrkt' && target.version.name === 'sun'
      );
    });
  }
  if (flavorText.length === 0) {
    flavorText = flavorTextEntries.filter((target: PokeFlavorTextEntry) => {
      return (
        target.language.name === 'ja-Hrkt' && target.version.name === 'shield'
      );
    });
  }
  if (flavorText.length === 0) {
    flavorText = flavorTextEntries.filter((target: PokeFlavorTextEntry) => {
      return (
        target.language.name === 'ja-Hrkt' &&
        target.version.name === 'ultra-sun'
      );
    });
  }
  if (flavorText.length === 0) {
    flavorText = flavorTextEntries.filter((target: PokeFlavorTextEntry) => {
      return (
        target.language.name === 'ja-Hrkt' &&
        target.version.name === 'lets-go-pikachu'
      );
    });
  }

  const pokeJaData = {
    name: res.data.names[0].name,
    flavorText: flavorText.length !== 0 ? flavorText[0].flavor_text : undefined,
  };

  return pokeJaData;
};

export default getPokeJaData;
