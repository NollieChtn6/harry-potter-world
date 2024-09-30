import { NavLink } from "react-router-dom";
import type { Character } from "../@types/types";

type CharacterProps = {
  character: Character;
};

export default function CharacterCard({ character }: CharacterProps) {
  const encodedName = encodeURIComponent(character.name);
  const isStudent = character.hogwartsStudent;
  const url = isStudent ? `/students/${encodedName}` : `/teachers/${encodedName}`;

  return (
    <>
      <article>
        <div className="article-wrapper">
          <figure>
            {character.image ? (
              <img src={character.image} alt={`Portrait of ${character.name}`} />
            ) : (
              <img src="/images/crystal-ball.jpg" alt={"Unknown character"} />
            )}
          </figure>
          <div className="article-body">
            <h2>{character.name}</h2>
            <NavLink to={url} className="read-more">
              Read more <span className="sr-only">about this</span>
            </NavLink>
          </div>
        </div>
      </article>
    </>
  );
}
