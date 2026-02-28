import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {

    const dispatch = useDispatch();
    const searchString = useSelector(state => state.searchString);

    const handleChange = e => {
    dispatch(updateSearchString(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput
                placeholder="Search..."
                value={searchString}
                onChange={handleChange}
            />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;