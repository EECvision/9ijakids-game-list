import styles from './search.module.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setFilterValue, setSearchValue, toggleFilter } from '../../redux/game/game.actions';
import { selectSearchValue } from '../../redux/game/game.selectors';

const Search = ({ setSearch, searchValue, setFilter, toggleFilter }) => {

  const handleChange = event => {
    const { target: { value } } = event;
    setSearch(value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    setSearch('');
  }

  const handleFocus = () => {
    setFilter('');
    toggleFilter(false)
  }

  return (
    <div className={styles.formContainer}>
      <i style={{ fontSize: '0.8rem' }} className="searchIcon fas fa-search"></i>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Search games by topic"
          value={searchValue}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </form>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  searchValue: selectSearchValue
})

const mapDispatchToProps = dispatch => ({
  setSearch: value => dispatch(setSearchValue(value)),
  setFilter: value => dispatch(setFilterValue(value)),
  toggleFilter: value => dispatch(toggleFilter(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)