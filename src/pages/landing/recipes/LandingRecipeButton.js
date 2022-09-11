function LandingRecipeButton({ meal, active, onClick }) {
  const label = meal.charAt(0).toUpperCase() + meal.substring(1);

  return (
    <button onClick={onClick} className={active === meal ? 'primary-button' : 'outline-button'}>
      {label}
    </button>
  );
}

export default LandingRecipeButton;
