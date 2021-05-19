import Filter from '../filter/filter.component';
import GameListMenu from '../gameListMenu/gameListMenu.component';
import Search from '../search/search.component';
import styles from './gameListOverview.module.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFilterValue, selectGameList, selectSearchValue } from '../../redux/game/game.selectors';

const GameListOverview = ({ gameList, searchValue, filterValue }) => {

  const regex = new RegExp(searchValue.toLowerCase());

  const gameListToDisplay = () => {
    if (gameList) {
      if (!searchValue && !filterValue) {
        return gameList
      } else if (searchValue) {
        return gameList
          .filter(game =>
            regex.test(game.Topic.toLowerCase())
          )         
      } else if (filterValue) {
        return gameList
          .filter(game =>
            game.Group === filterValue || game.Level === filterValue
          )
      } else {
        return gameList
      }
    }
  }

  return (
    <div className={styles.gameListOverviewContainer}>
      <div className={styles.searchAndFilterContainer}>
        <Search />
        <Filter gameList={gameList} />
      </div>
      <GameListMenu gameList={gameListToDisplay()} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  gameList: selectGameList,
  searchValue: selectSearchValue,
  filterValue: selectFilterValue
})

export default connect(mapStateToProps)(GameListOverview);