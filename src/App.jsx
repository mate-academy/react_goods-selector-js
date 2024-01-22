import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [good, setGood] = useState('Jam');
  const noGoodSelectedMsg = 'No goods selected';
  const selectedGood = `${good} is selected`;

  const handleGoodsClick = (clickedGood) => {
    setGood(clickedGood === good ? '' : clickedGood);
  };

  const removeSelected = () => {
    setGood('');
  };

  const goodComponents = goods.map((currentGood) => {
    const isSelected = currentGood === good;

    return (
      <tr
        data-cy="Good"
        className={cn({
          'has-background-success-light': isSelected,
        })}
        key={currentGood}
      >
        <td>
          <button
            data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
            type="button"
            onClick={() => handleGoodsClick(currentGood)}
            className={cn('button', {
              'is-info': isSelected,
            })}
          >
            {isSelected ? '-' : '+'}
          </button>
        </td>

        <td data-cy="GoodTitle" className="is-vcentered">{currentGood}</td>
      </tr>
    );
  });

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good === '' ? (
          noGoodSelectedMsg
        ) : (
          selectedGood
        )}

        {good && (
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={removeSelected}
        />
        )}
      </h1>

      <table className="table">
        <tbody>{goodComponents}</tbody>
      </table>
    </main>
  );
};
