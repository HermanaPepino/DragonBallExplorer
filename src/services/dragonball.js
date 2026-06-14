import axios from "axios";

const API_URL = "https://dragonball-api.com/api";

export const getCharacters = async (name = "") => {
  const res = await axios.get(`${API_URL}/characters`, {
    params: name ? { name } : {}
  });

  return res.data.items || res.data || [];
};
