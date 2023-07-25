export const GoodCard = ({ good, onGoodSelected, selected }) => (
  <tr data-cy="Good" className={`${good === selected && 'has-background-success-light'}`}>
    {good !== selected ? (
      <td>
        <button
          data-cy="AddButton"
          type="button"
          className="button"
          onClick={value => onGoodSelected(good)}
        >
          +
        </button>
      </td>
    ) : (
      <td>
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={() => onGoodSelected('')}
        >
          -
        </button>
      </td>
    )}

    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </tr>
);
