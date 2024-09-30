import type { Spell } from "../@types/types";

type SpellProps = {
  spell: Spell;
};

export default function SpellCard({ spell }: SpellProps) {
  return (
    <>
      <article>
        <div className="article-wrapper">
          <figure>{<img src="https://picsum.photos/300/200" alt={"Illustration"} />}</figure>
          <div className="article-body">
            <h2>{spell.name}</h2>
            <a href="url" className="read-more">
              Read more <span className="sr-only">about this</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
