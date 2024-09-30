import { useEffect, useState } from "react";
import axios from "axios";

import type { Character } from "../../@types/types";

export function TeachersPage() {
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

  const teachers: Character[] = characters.filter((character) => character.hogwartsStaff === true);

  return (
    <>
      <h2>Teachers of Howgarts</h2>
      <p>List of Teachers</p>
      {teachers.map((teacher) => (
        <p key={teacher.id}>{teacher.name}</p>
      ))}
    </>
  );
}
