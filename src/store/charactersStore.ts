import axios from "axios";
import { create } from "zustand";

import type { Character } from "../@types/types";

type CharactersStore = {
  characters: Character[];
  fetchCharacters: () => Promise<void>;
};

export const useCharactersStore = create<CharactersStore>((set) => ({
  characters: [],
  fetchCharacters: async () => {
    try {
      const response = await axios.get("https://hp-api.onrender.com/api/characters");
      if (response.status === 200 && response.data) {
        set({ characters: response.data });
        console.log(response.data);
      } else {
        throw new Error("Failed to fetch characters");
      }
    } catch (error) {
      console.error(error);
    }
  },
}));
