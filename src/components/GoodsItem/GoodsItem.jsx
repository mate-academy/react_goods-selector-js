import cn from 'classnames';

export const GoodsItem = ({ good, selectedGood, onGoodsSelect }) => {
  const isSelected = good === selectedGood;

  return (
    <tr
      data-cy="Good"
      className={cn({
        'has-background-success-light': isSelected,
      })}
      key={good}
    >
      <td>
        <button
          data-cy={`${isSelected ? 'RemoveButton' : 'AddButton'}`}
          type="button"
          className={cn('button', {
            'is-info': isSelected,
          })}
          onClick={() => isSelected
            ? onGoodsSelect('')
            : onGoodsSelect(good)
          }
        >
          {isSelected ? '-' : '+'}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
};
