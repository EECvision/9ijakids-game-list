import GameListItem from '../gameListItem/gameListItem.component';
import styles from './gameListMenu.module.css';

const GameListMenu = ({gameList}) => {
  return (
    <div className={styles.gameListMenuContainer}>
      {
        gameList.map((game, idx) => (
          <GameListItem key={idx} {...game}/>
        ))
      }
    </div>
  )
}

export default GameListMenu;