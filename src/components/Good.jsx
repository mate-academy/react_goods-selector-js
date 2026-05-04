export const Good = ({ good, selectedGood, setSelectedGoog }) => {
  const isSelectedGood = good === selectedGood;

  return (
    <tr
      data-cy="Good"
      className={isSelectedGood ? 'has-background-success-light' : ''}
    >
      <td>
        {isSelectedGood ? (
          <button
            data-cy="RemoveButton"
            type="button"
            className="button is-info"
            onClick={() => setSelectedGoog(null)}
          >
            -
          </button>
        ) : (
          <button
            data-cy="AddButton"
            type="button"
            className="button"
            onClick={() => setSelectedGoog(good)}
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
