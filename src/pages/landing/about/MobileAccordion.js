import MobileAccordionTab from './MobileAccordionTab';

function MobileAccordion({ content }) {
  const renderedTabs = Object.keys(content).map((feature) => (
    <MobileAccordionTab
      buttonTitle={feature.replace('_', ' ')}
      contentTitle={content[feature].title}
      contentBody={content[feature].description}
    />
  ));

  return <>{renderedTabs}</>;
}

export default MobileAccordion;
