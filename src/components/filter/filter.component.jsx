import FilterDropdown from '../filterDropdown/filterDropdown.component';
import styles from './filter.module.css';

const Filter = ({ gameList }) => {

  let groups = new Set();
  let levels = new Set();

  for (let game of gameList) {
    groups.add(game.Group);
    levels.add(game.Level)
  }

  return (
    <div className={styles.filterContainer}>
      <FilterDropdown groups={groups} levels={levels}/>
    </div>
  )
}

export default Filter;