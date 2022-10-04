import classes from './styles/BookOptions.module.css';
import searchIcon from '../../assets/svgs/search.svg';
import sortIcon from '../../assets/svgs/sort.svg';
import addIcon from '../../assets/svgs/add.svg';

function BookOptions(props) {
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <div>
          <button className={classes.option}>
            <img src={sortIcon} alt="" />
            <p className="body">
              <span className="color-primary">Sort by:</span> Alphabetical
            </p>
          </button>

          <div className={classes.option}>
            <img src={searchIcon} alt="" />
            <input className="body" type="text" placeholder="Search for Recipes" />
          </div>
        </div>

        <button className={classes.option}>
          <img src={addIcon} alt="" />
          <p className="body">Create Custom Recipe</p>
        </button>
      </div>
      <hr className="app-rule" />
    </section>
  );
}

export default BookOptions;
