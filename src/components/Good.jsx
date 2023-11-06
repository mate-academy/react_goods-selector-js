export const Good = ({ good, selected, setGood }) => {
  const itemClassName = selected === good ? 'has-background-success-light' : '';

  return (
    <tr data-cy="Good" className={itemClassName}>
      <td>
        {selected !== good ? (
          <button
            data-cy="AddButton"
            type="button"
            className="button"
            onClick={() => {
              setGood(good);
            }}
          >
            +
          </button>
        ) : (
          <button
            data-cy="RemoveButton"
            type="button"
            className="button is-info"
            onClick={() => {
              setGood('');
            }}
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
};
