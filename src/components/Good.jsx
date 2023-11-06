import cn from 'classnames';

export const Good = ({ good, selectedGood, setSelectedGood }) => (
  <tr
    data-cy="Good"
    className={cn({ 'has-background-success-light': selectedGood === good })}
  >
    <td>
      {selectedGood !== good ? (
        <button
          data-cy="AddButton"
          type="button"
          className="button"
          onClick={() => setSelectedGood(good)}
        >
          +
        </button>
      ) : (
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={() => setSelectedGood('')}
        >
          -
        </button>
      )}
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </tr>
);
