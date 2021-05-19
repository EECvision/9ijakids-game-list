import axios from 'axios';


export const getGamesList = () => {
  return axios.get('http://bit.ly/TeaserTask');
}
