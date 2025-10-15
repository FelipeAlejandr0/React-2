import Itemanime from './Itemanime.jsx';
import styles from './Animelist.module.css';

function Animelist({ animes, onEdit, onDelete }) {
  return (
    <div className={styles.RED}>
      {animes.map(anime => (
        <Itemanime
          key={anime.id}
          anime={anime}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Animelist;