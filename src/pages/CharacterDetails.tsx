import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import type { Character } from "../@types/types";

export function CharacterDetails() {
  // Fix error "Argument of type 'string | undefined' is not assignable to parameter of type 'string'.":
  // https://stackoverflow.com/questions/72912365/i-have-some-error-in-the-typescript-and-the-hook-of-the-useparam
  const { encodedName } = useParams() as { encodedName: string };
  const characterName: string = decodeURIComponent(encodedName);
  console.log(characterName);
  const [character, setCharacter] = useState<Character | null>(null);

  // Useful resource: https://njirumwai.hashnode.dev/react-router-6-go-back-how-to-go-back-using-react-router-v6
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSelectedCharacter = async () => {
      try {
        const response = await axios.get("https://hp-api.onrender.com/api/characters");
        if (response.status === 200 && response.data) {
          const selectedCharacter = response.data.find(
            (character: Character) => character.name === characterName,
          );
          setCharacter(selectedCharacter);
          console.log(response.data);
        } else {
          throw new Error("Failed to fetch characters");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchSelectedCharacter();
  }, [characterName]);

  return (
    <>
      <h3>This is the page of {character?.name}</h3>{" "}
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
      <p>Born: {character?.dateOfBirth}</p>
    </>
  );
}
