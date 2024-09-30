import { useEffect, useState } from "react";
import axios from "axios";

import type { Character } from "../../@types/types";

import CharacterCard from "../Character/CharacterCard";

export function StudentsPage() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("https://hp-api.onrender.com/api/characters");
        if (response.status === 200 && response.data) {
          setCharacters(response.data);
          console.log(response.data);
        } else {
          throw new Error("Failed to fetch characters");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCharacters();
  }, []);

  const students: Character[] = characters.filter(
    (character) => character.hogwartsStudent === true,
  );

  return (
    <>
      <h2>Students of Howgarts</h2>
      <p>List of Students</p>
      <section className="articles">
        {students.map((student) => (
          <>
            <CharacterCard key={student.id} character={student} />
          </>
        ))}
      </section>
    </>
  );
}
