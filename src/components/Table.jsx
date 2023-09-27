import cn from 'classnames';

export const Table = (
  { goods, thisGood,
    setThisGood, clearGoodsState,
    checkToRemove },
) => (
  <tbody>
    {goods.map(good => (
      <tr
        data-cy="Good"
        className={cn('td', {
          'has-background-success-light': thisGood === good,
        })}
      >
        <td>
          <button
            onClick={() => {
              checkToRemove(good);
            }}
            data-cy="AddButton"
            type="button"
            className={cn('button', {
              'button is-info': thisGood === good,
            })}
          >
            {thisGood === good ? '-' : '+'}
          </button>
        </td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {good}
        </td>
      </tr>
    ))}
  </tbody>
);
