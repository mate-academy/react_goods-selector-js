export const GoodsTableRow = ({ good, title, setTitle }) => (
  <tr
    key={good}
    data-cy="Good"
    className={title === good ? 'has-background-success-light' : ''}
  >
    <td>
      <button
        onClick={() => {
          setTitle(good);
        }}
        data-cy="AddButton"
        type="button"
        className={title === good ? 'button is-info' : 'button'}
      >
        {title === good ? '-' : '+'}
      </button>
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </tr>
);
