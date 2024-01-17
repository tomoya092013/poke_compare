'use client';
import { useEffect, useState } from 'react';

import getPokeData from './api/getPokeData';
import getPokeName from './api/getPokeName';
import getPokeUrlList from './api/getPokeUrlList';
import PokeCard from './comonents/pokeCard';
import { Poke, PokeNo, PokeUrl } from './type/poke';

const Page = () => {
  const initNo = {
    start: 0,
    end: 12,
  };
  const [pokeNo, setPokeNo] = useState<PokeNo>(initNo);
  const [pokeList, setPokeList] = useState<Poke[]>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const pokeUrlList: PokeUrl[] = await getPokeUrlList(pokeNo);
    const pokeDataList: Poke[] = await fetchPokeData(pokeUrlList);
    const pokeNameList = await fetchPokeName(pokeDataList);
    const convertData: Poke[] = await pokeDataList.map((poke, index) => ({
      ...poke,
      name: pokeNameList[index],
    }));

    setPokeList(convertData);
    setIsLoading(false);
  };

  const fetchPokeData = async (pokeUrlList: PokeUrl[]) => {
    const resPokeData = pokeUrlList.map(async (pokeUrl) => {
      return await getPokeData(pokeUrl);
    });
    return Promise.all(resPokeData);
  };

  const fetchPokeName = async (pokeDataList: Poke[]) => {
    const resPokeNameData = pokeDataList.map(async (pokeData) => {
      return await getPokeName(pokeData.speciesUrl);
    });
    return await Promise.all(resPokeNameData);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeNo]);

  console.log('まとめ', pokeList);

  if (isLoading) {
    return <>読み込み中...</>;
  }

  if (!pokeList || pokeList.length === 0) {
    return <>データが見つかりません。</>;
  }

  return (
    <>
      <PokeCard pokeList={pokeList} />
    </>
  );
};

export default Page;
