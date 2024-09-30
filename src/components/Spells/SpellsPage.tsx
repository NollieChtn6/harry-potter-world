import { useEffect, useState } from "react";
import axios from "axios";

import type { Spell } from "../../@types/types";

import SpellCard from "./SpellCard";

export function SpellsPage() {
  const [spells, setSpells] = useState<Spell[]>([]);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await axios.get("https://hp-api.onrender.com/api/spells");
        if (response.status === 200 && response.data) {
          setSpells(response.data);
          console.log(response.data);
        } else {
          throw new Error("Failed to fetch spells");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchSpells();
  }, []);

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
