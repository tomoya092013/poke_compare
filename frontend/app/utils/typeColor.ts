export const getTypeInfo = (type: string) => {
  switch (type) {
    case 'normal':
      return { name: 'ノーマル', color: '#aea886' };
    case 'fighting':
      return { name: 'かくとう', color: '	#9a3d3e' };
    case 'flying':
      return { name: 'ひこう', color: '#7e9ecf' };
    case 'poison':
      return { name: 'どく', color: '#8f5b98' };
    case 'ground':
      return { name: 'じめん', color: '#916d3c' };
    case 'rock':
      return { name: 'いわ', color: '#878052' };
    case 'bug':
      return { name: 'むし', color: '#989001' };
    case 'ghost':
      return { name: 'ゴースト', color: '#555fa4' };
    case 'steel':
      return { name: 'はがね', color: '#9b9b9b' };
    case 'fire':
      return { name: 'ほのお', color: '#f45c19' };
    case 'water':
      return { name: 'みず', color: '#4a96d6' };
    case 'grass':
      return { name: 'くさ', color: '#28b25c' };
    case 'electric':
      return { name: 'でんき', color: '#eaa317' };
    case 'psychic':
      return { name: 'エスパー', color: '#d56d8b' };
    case 'ice':
      return { name: 'こおり', color: '#45a9c0' };
    case 'dragon':
      return { name: 'ドラゴン', color: '#454ba6' };
    case 'dark':
      return { name: 'あく', color: '#7a0049' };
    case 'fairy':
      return { name: 'フェアリー', color: '#ffbbff' };
    default:
      return { name: 'その他', color: 'black' };
  }
};
