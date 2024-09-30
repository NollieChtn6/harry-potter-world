import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import type { Spell } from "../@types/types";

export function SpellDetails() {
  // Fix error "Argument of type 'string | undefined' is not assignable to parameter of type 'string'.":
  // https://stackoverflow.com/questions/72912365/i-have-some-error-in-the-typescript-and-the-hook-of-the-useparam
  const { encodedName } = useParams() as { encodedName: string };
  const spellName: string = decodeURIComponent(encodedName);
  const [spell, setSpell] = useState<Spell | null>(null);

  // Useful resource: https://njirumwai.hashnode.dev/react-router-6-go-back-how-to-go-back-using-react-router-v6
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSelectedSpell = async () => {
      try {
        const response = await axios.get("https://hp-api.onrender.com/api/spells");
        if (response.status === 200 && response.data) {
          const selectedSpell = response.data.find((spell: Spell) => spell.name === spellName);
          setSpell(selectedSpell);
          console.log(response.data);
        } else {
          throw new Error("Failed to fetch characters");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchSelectedSpell();
  }, [spellName]);

  return (
    <>
      <h3>This is the page of {spell?.name}</h3>{" "}
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}
