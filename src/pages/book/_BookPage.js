import BookOptions from './BookOptions';
import BookCard from './BookCard';

import classes from './styles/BookPage.module.css';
import { useEffect } from 'react';
import { useRef } from 'react';

function _BookPage(props) {
  const scrollSectionRef = useRef();

  useEffect(() => {
    const el = scrollSectionRef.current;

    function onWheel(event) {
      event.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + event.deltaY * 5,
        behavior: 'smooth',
      });
    }

    el.addEventListener('wheel', onWheel);
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <main className={classes.main}>
      <BookOptions />
      <section ref={scrollSectionRef} className={classes.recipes}>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </section>
    </main>
  );
}

export default _BookPage;
