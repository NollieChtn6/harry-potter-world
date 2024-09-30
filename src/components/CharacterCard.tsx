import type { Character } from "../@types/types";

type CharacterProps = {
  character: Character;
};

export default function CharacterCard({ character }: CharacterProps) {
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
            <a href="url" className="read-more">
              Read more <span className="sr-only">about this</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
