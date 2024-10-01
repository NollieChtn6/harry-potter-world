import { store } from "../store/storeIndex";

import CharacterCard from "../components/CharacterCard";

export function TeachersPage() {
  const characters = store.charactersStore((state) => state.characters);
  const teachers = characters.filter((teacher) => teacher.hogwartsStaff === true);
  return (
    <>
      <h2>Teachers of Howgarts</h2>
      <p>List of Teachers</p>
      <section className="articles">
        {teachers.map((teacher) => (
          <>
            <CharacterCard key={teacher.id} character={teacher} />
          </>
        ))}
      </section>
    </>
  );
}
