import BookOptions from './BookOptions';
import BookCard from './BookCard';

import classes from './styles/BookPage.module.css';

function _BookPage(props) {
  return (
    <main className={classes.main}>
      <BookOptions />
      <section className={classes.recipes}>
        <BookCard />
      </section>
    </main>
  );
}

export default _BookPage;
