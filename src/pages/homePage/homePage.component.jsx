import React from 'react';
import Banner from '../../components/banner/banner.component';
import GameListOverview from '../../components/gameListOverview/gameListOverview.component';
import styles from './homePage.module.css';

function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <Banner/>
      <GameListOverview />
    </div>
  )
}

export default HomePage;