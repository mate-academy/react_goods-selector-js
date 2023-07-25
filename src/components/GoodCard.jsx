export const GoodCard = ({ good, callback, selected }) => (
  <tr data-cy="Good">
    {selected === '' && (
      <td>
        <button
          data-cy="AddButton"
          type="button"
          className={`button ${good === selected && 'is-info'}`}
          onClick={value => callback(good)}
        >
          +
        </button>
      </td>
    )}

    <td data-cy="GoodTitle" className={`is-vcentered ${good === selected && 'has-background-success-light'}`}>
      {good}
    </td>
  </tr>
);
