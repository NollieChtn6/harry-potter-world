import CharacterCard from "../components/CharacterCard";
import { store } from "../store/storeIndex";

export function StudentsPage() {
  const characters = store.charactersStore((state) => state.characters);
  const students = characters.filter((character) => character.hogwartsStudent === true);

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
