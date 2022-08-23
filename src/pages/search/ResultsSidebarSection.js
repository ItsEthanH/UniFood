import { useRef } from 'react';

import SectionTitle from '../../components/ui/SectionTitle';
import ResultSidebarCard from './ResultSidebarCard';
import ResultSidebarButton from './ResultSidebarButton';
import ResultsPlaceholder from './ResultsPlaceholder';

function ResultsSidebarSection(props) {
  const { title, id, items, setItems } = props;

  const sectionRef = useRef(id);

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
    let id = name.replace(/\s+/g, '') + Math.floor(Math.random() * 10000);

    const item = {
      id: id,
      name: name,
      src: src,
    };

    if (location === sectionRef) {
      setItems((prevItems) => [...prevItems, item]);
    }

    dragExit(location);
  }

  function handleRemove(id, list) {
    const newItems = list.filter((item) => item.id !== id);
    setItems(newItems);
  }

  function onButtonClick() {
    props.onButtonClick(id);
  }

  const renderedCards = items.map((item) => (
    <ResultSidebarCard
      id={item.id}
      key={item.id}
      name={item.name}
      src={item.src}
      onRemove={() => handleRemove(item.id, shoppingListItems)}
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
          <ResultSidebarButton type={id} text={`Add to ${title}`} onClick={onButtonClick} />
        )}
      </ul>
    </>
  );
}

export default ResultsSidebarSection;
