import Hero from '../Hero/Hero';
//import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/store';
//import { Link } from 'react-router-dom';
//import styles from './Home.module.scss';
import Lists from '../Lists/Lists';


const Home = () => {

  const lists = useSelector(getAllLists);

  return (
    <>
      <Hero />
      <Lists />      
    </>
  );
};

export default Home;