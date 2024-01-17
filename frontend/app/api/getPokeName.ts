import axios from 'axios';

const getPokeName = async (targetUrl: string): Promise<string> => {
  const res = await axios.get(targetUrl);
  return res.data.names[0].name;
};

export default getPokeName;
