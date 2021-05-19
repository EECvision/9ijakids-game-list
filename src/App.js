import HomePage from './pages/homePage/homePage.component';
// import { useEffect } from 'react';
import { fetchGamesStart } from './redux/game/game.actions';
import { connect } from 'react-redux';
import styles from './App.module.css';

function App({fetchGames}) {

  // useEffect(()=>{
  //   fetchGames()
  // })

  return (
    <div className={styles.appContainer}>
      <HomePage/>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchGames: () => dispatch(fetchGamesStart())
})

export default  connect(null, mapDispatchToProps)(App)
