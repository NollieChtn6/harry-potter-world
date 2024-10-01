import axios from "axios";
import { create } from "zustand";

import type { Spell } from "../@types/types";

type SpellsStore = {
  spells: Spell[];
  fetchSpells: () => Promise<void>;
};

export const useSpellsStore = create<SpellsStore>((set) => ({
  spells: [],
  fetchSpells: async () => {
    try {
      const response = await axios.get("https://hp-api.onrender.com/api/spells");
      if (response.status === 200 && response.data) {
        set({ spells: response.data });
        console.log(response.data);
      } else {
        throw new Error("Failed to fetch spells");
      }
    } catch (error) {
      console.error(error);
    }
  },
}));
