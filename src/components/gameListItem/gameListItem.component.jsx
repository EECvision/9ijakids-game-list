import styles from './gameListItem.module.css';

const GameListItem = ({ GameTitle, GameDescription, GameImage }) => {
  return (
    <div className={styles.gameListItemContainer}>
          <img className={styles.image} src={GameImage} alt="game-icon" />
      <div className={styles.info}>
        <div className={styles.title}>{GameTitle}</div>
        <div className={styles.description}>{GameDescription}</div>
      </div>
    </div>
  )
}

export default GameListItem;