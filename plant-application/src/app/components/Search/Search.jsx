import {BsSearch} from 'react-icons/Bs';
import styles from './search.module.css'
const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <BsSearch className={styles.searchIcon} />
      <input
        placeholder="Search"
        type="text"
        className={styles.searchInput}
      />
    </div>
  )
}

export default Search