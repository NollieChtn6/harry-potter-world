import { store } from "../store/storeIndex";

import SpellCard from "../components/SpellCard";

export function SpellsPage() {
  const spells = store.spellsStore((state) => state.spells);

  return (
    <>
      <h2>Spells of Howgarts</h2>
      <p>List of spells</p>
      <section className="articles">
        {spells.map((spell) => (
          <SpellCard key={spell.id} spell={spell} />
        ))}
      </section>
    </>
  );
}
