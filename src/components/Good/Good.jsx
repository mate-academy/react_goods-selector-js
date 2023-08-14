export const Good = ({ good, selectedGood, setIsSelected }) => {
  const selectGood = () => {
    if (selectedGood === good) {
      setIsSelected(null);
    } else {
      setIsSelected(good);
    }
  };

  return (
    <tr
      data-cy="Good"
      className={selectedGood === good ? 'has-background-success-light' : ''}
    >
      <td>
        {selectedGood === good ? (
          <button
            data-cy="RemoveButton"
            type="button"
            className="button is-info"
            onClick={selectGood}
          >
            -
          </button>
        ) : (
          <button
            data-cy="AddButton"
            type="button"
            className="button"
            onClick={selectGood}
          >
            +
          </button>
        )}
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
};
