import { useEffect } from "react";
import { Layout } from "./pages/Layout";
import { store } from "./store/storeIndex";

import "./App.css";

function App() {
  const fetchCharacters = store.charactersStore((state) => state.fetchCharacters);
  const fetchSpells = store.spellsStore((state) => state.fetchSpells);

  useEffect(() => {
    const loadData = async () => {
      await fetchCharacters();
      await fetchSpells();
    };
    loadData();
  }, [fetchCharacters, fetchSpells]);
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
