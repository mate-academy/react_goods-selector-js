export const SelectButton = ({ good, isSelected, selectGood }) => (
  <button
    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
    type="button"
    className={`button ${isSelected ? 'is-info' : ''}`}
    onClick={() => selectGood(isSelected ? null : good)}
  >
    {isSelected ? '-' : '+'}
  </button>
);
