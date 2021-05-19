import { animated, config, useSpring } from 'react-spring';
import { useState } from 'react';
import styles from './filterDropdown.module.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setFilterValue, setSearchValue, toggleFilter } from '../../redux/game/game.actions';
import { selectToggleFilter, selectFilterValue } from '../../redux/game/game.selectors';


const FilterDropdown = ({ groups, levels, setFilter, setSearch, toggleFilter, isToggleFilter, filterValue }) => {

  const [flipX, setX] = useState(false)
  const [flipY, setY] = useState(false)
  const [xx] = useState(4);
  const [yy] = useState(5);
  const [zz, setZZ] = useState(8);

  const { x, y, z } = useSpring({
    x: flipX ? xx : 0,
    y: flipY ? yy : 0,
    z: isToggleFilter ? zz : 0,
    config: config.gentle
  })

  const handleX = () => {
    setX(!flipX);
    if (!flipX) {
      setZZ(zz + xx)
    } else {
      setZZ(zz - xx)
    }
  }

  const handleY = () => {
    setY(!flipY);
    if (!flipY) {
      setZZ(zz + yy)
    } else {
      setZZ(zz - yy)
    }
  }

  const handleFilter = () => {
    toggleFilter(!isToggleFilter);
    setSearch('');
  }

  const handleFilterAll =()=>{
    setFilter('');
    toggleFilter(false)
  }

  return (
    <div className={styles.listContainer}>
      <h3 onClick={handleFilter} >Filter By: <span className={styles.subTitle}>{filterValue ? filterValue : '--'}</span> </h3>
      <animated.ul style={{ height: z.to(z => `${z}rem`), overflow: 'hidden' }}>
        <li onClick={handleX} >Groups</li>
        <animated.ul style={{ height: x.to(x => `${x}rem`), overflow: 'hidden' }}>
          {
            [...groups].map((group, idx) => (
              <li key={idx} onClick={() => setFilter(group)}>{group}</li>
            ))
          }
        </animated.ul>
        <li onClick={handleY} >Levels</li>
        <animated.ul style={{ height: y.to(y => `${y}rem`), overflow: 'hidden' }}>
          {
            [...levels].map((level, idx) => (
              <li key={idx} onClick={() => setFilter(level)}>{level}</li>
            ))
          }
        </animated.ul>
        <li onClick={handleFilterAll}>All</li>
      </animated.ul>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isToggleFilter: selectToggleFilter,
  filterValue: selectFilterValue
})

const mapDispatchToProps = dispatch => ({
  setFilter: value => dispatch(setFilterValue(value)),
  setSearch: value => dispatch(setSearchValue(value)),
  toggleFilter: value => dispatch(toggleFilter(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterDropdown)