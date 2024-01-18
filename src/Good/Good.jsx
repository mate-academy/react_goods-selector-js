export const Good = ({
  good,
  handleSelect,
  isSelected,
  handleDelete,
}) => {
  const selectedGoodClass = isSelected ? 'has-background-success-light' : '';
  const selectedBtnClass = isSelected ? 'button is-info' : 'button';
  const selectedBtnData = isSelected ? 'RemoveButton' : 'AddButton';
  const handleClick = () => (isSelected ? handleDelete() : handleSelect(good));

  return (
    <tr data-cy="Good" className={selectedGoodClass}>
      <td>
        <button
          data-cy={selectedBtnData}
          type="button"
          className={selectedBtnClass}
          onClick={handleClick}
        >
          {isSelected ? '-' : '+' }
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
};
