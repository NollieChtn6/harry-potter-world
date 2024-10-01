import CharacterCard from "../components/CharacterCard";
import { store } from "../store/storeIndex";

export function OtherCharactersPage() {
  const characters = store.charactersStore((state) => state.characters);
  const otherCharacters = characters.filter(
    (character) => !character.hogwartsStudent && !character.hogwartsStaff,
  );

  return (
    <>
      <h2>Other Characters</h2>
      <p>List of other characters</p>
      <section className="articles">
        {otherCharacters.map((otherCharacter) => (
          <>
            <CharacterCard key={otherCharacter.id} character={otherCharacter} />
          </>
        ))}
      </section>
    </>
  );
}
