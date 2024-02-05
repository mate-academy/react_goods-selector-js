import 'bulma/css/bulma.css';
import cn from 'classnames';

export const ItemGood = ({
  good,
  goodsMod,
  goodsCh,
  setGoodsCh,
}) => {
  const { id, name, bool } = good;

  function setNewValues() {
    const itemHasTrueId
    = goodsCh.find(i => i.bool)
      ? goodsCh.find(i => i.bool).id
      : 0;

    if (itemHasTrueId !== id) {
      const a = goodsMod.map(e => ({
        ...e, bool: false,
      }));
      const chosen = a.find(e => e.id === id);

      chosen.bool = true;

      setGoodsCh(a);
    } else if (itemHasTrueId === id) {
      const a = goodsMod.map(e => ({
        ...e, bool: false,
      }));

      setGoodsCh(a);
    }
  }

  const btnClickAction = function clickAct({ type }) {
    if (type === 'click') {
      setNewValues();
    }
  };

  return (
    <tr
      data-cy="Good"
      className={cn({
        'has-background-success-light': bool,
      })}
    >
      <td>
        <button
          data-cy={`${bool ? 'RemoveButton' : 'AddButton'}`}
          type="button"
          className={cn('button', {
            'is-info': bool,
          })}
          onClick={btnClickAction}
        >
          {`${bool ? '-' : '+'}`}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {name}
      </td>
    </tr>
  );
};
