import cn from 'classnames';

export const GoodsList = ({ goodsList, selectProduct, setSelectProduct }) => {
  const handleSelectGoods = good => {
    setSelectProduct(good === selectProduct ? null : good);
  };

  return goodsList.map(good => {
    const isSelected = good === selectProduct;

    return (
      <tr
        data-cy="Good"
        className={cn({
          'has-background-success-light': isSelected,
        })}
      >
        <td>
          <button
            data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
            type="button"
            className={cn('button', { 'is-info': isSelected })}
            onClick={() => handleSelectGoods(good)}
          >
            {isSelected ? '-' : '+'}
          </button>
        </td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {good}
        </td>
      </tr>
    );
  });
};
