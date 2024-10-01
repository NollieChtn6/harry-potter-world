import { useCharactersStore } from "./charactersStore";
import { useSpellsStore } from "./spellsStore";

export const store = {
  charactersStore: useCharactersStore,
  spellsStore: useSpellsStore,
};
