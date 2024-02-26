export const Button = ({ good, selectedGood }) =>
  good === selectedGood ? (
    <button data-cy="RemoveButton" type="button" className="button is-info">
      -
    </button>
  ) : (
    <button data-cy="AddButton" type="button" className="button">
      +
    </button>
  );
