import { useRef } from 'react';

import SectionTitle from '../../components/ui/SectionTitle';
import ResultSidebarCard from './ResultSidebarCard';
import ResultSidebarButton from './ResultSidebarButton';
import ResultsPlaceholder from './ResultsPlaceholder';

function ResultsSidebarSection(props) {
  const { title, sectionId, items, setItems } = props;

  const sectionRef = useRef(sectionId);

  function checkDraggable(event) {
    if (!event.dataTransfer.getData('text/title')) {
      location.current.style.backgroundColor = 'transparent';
      return;
    }
  }

  function dragEnter(location, event) {
    checkDraggable(event);
    location.current.style.backgroundColor = '#0fa50f38';
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function dragExit(location) {
    location.current.style.backgroundColor = 'transparent';
  }

  function drop(location, event) {
    event.preventDefault();
    checkDraggable(event);

    let name = event.dataTransfer.getData('text/title');
    let src = event.dataTransfer.getData('text/src');
    let recipeId = event.dataTransfer.getData('text/id');
    let uniqueId = name.replace(/\s+/g, '') + Math.floor(Math.random() * 1000000);

    const item = {
      recipeId: recipeId,
      uniqueId: uniqueId,
      name: name,
      src: src,
      quantity: 1,
      date: null,
      type: null,
    };

    if (location === sectionRef) {
      setItems((prevItems) => [...prevItems, item]);
    }

    dragExit(location);
  }

  function handleRemove(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  function mealCatagoriseHandler(recipeId, type, dateObj, quantity) {
    props.onMealCatagorise(sectionId, recipeId, type, dateObj, quantity);
  }

  function sidebarSubmitHandler() {
    props.onSidebarSubmit(sectionId);
  }

  const renderedCards = items.map((item) => (
    <ResultSidebarCard
      uniqueId={item.uniqueId}
      recipeId={item.recipeId}
      key={item.uniqueId}
      name={item.name}
      src={item.src}
      onRemove={() => handleRemove(item.uniqueId)}
      onCatagorise={mealCatagoriseHandler}
    />
  ));

  return (
    <>
      <SectionTitle white={true}>{title}</SectionTitle>
      <ul
        ref={sectionRef}
        onDragEnter={dragEnter.bind(null, sectionRef)}
        onDragOver={dragOver}
        onDragExit={dragExit.bind(null, sectionRef)}
        onDrop={drop.bind(null, sectionRef)}
      >
        {renderedCards}
        <ResultsPlaceholder />
        {items.length > 0 && (
          <ResultSidebarButton
            type={sectionId}
            text={`Add to ${title}`}
            onClick={sidebarSubmitHandler}
          />
        )}
      </ul>
    </>
  );
}

export default ResultsSidebarSection;
