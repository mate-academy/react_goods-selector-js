import cn from 'classnames';

export const ListItem = ({
  selectedGood,
  setSelectedGood,
  good,
}) => {
  const selectedItem = selectedGood === good;

  const goodChangeHandler = () => {
    if (selectedItem) {
      setSelectedGood('');
    } else {
      setSelectedGood(good);
    }
  };

  return (
    <tr
      data-cy="Good"
      className={cn({
        'has-background-success-light': selectedItem,
      })}
    >
      <td>
        {selectedItem
          ? (
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
              onClick={goodChangeHandler}
            >
              -
            </button>
          ) : (
            <button
              data-cy="AddButton"
              type="button"
              className="button"
              onClick={goodChangeHandler}
            >
              +
            </button>
          )}
      </td>

      <td
        data-cy="GoodTitle"
        className="is-vcentered"
      >
        {good}
      </td>
    </tr>
  );
};
