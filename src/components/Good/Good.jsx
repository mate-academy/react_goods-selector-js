import cn from 'classnames';

export const Good = ({ good, selectedGood, setSelectedGood }) => {
  const setAvoidValue = () => setSelectedGood('');
  const setGood = () => setSelectedGood(good);

  return (
    <tr
      data-cy="Good"
      className={cn({ 'has-background-success-light': selectedGood === good })}
    >
      <td>
        {selectedGood === good ? (
          <button
            data-cy="RemoveButton"
            type="button"
            className="button is-info"
            onClick={setAvoidValue}
          >
            -
          </button>
        ) : (
          <button
            data-cy="AddButton"
            type="button"
            className="button"
            onClick={setGood}
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
