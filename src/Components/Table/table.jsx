export const Table = ({ goods, selectedGood, selectGood, clearSelection }) => (
  <table className="table">
    <tbody>
      {goods.map(good => (
        <tr
          key={good}
          data-cy="Good"
          className={
            selectedGood === good ? 'has-background-success-light' : ''
          }
        >
          <td>
            {selectedGood === good ? (
              <button
                onClick={clearSelection}
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
              >
                -
              </button>
            ) : (
              <button
                onClick={() => selectGood(good)}
                data-cy="AddButton"
                type="button"
                className="button"
              >
                +
              </button>
            )}
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {good}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
