import css from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    <div className={css.castContainer}>
      <h2 className={css.castTitle}>Cast</h2>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={css.castListItem}>
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
