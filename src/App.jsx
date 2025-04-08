import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

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
  const [value, setValue] = useState('No goods selected');
  const [selectedGoods, setSelectedGoods] = useState('Jam');

  const toggleSelection = good => {
    setValue(`${good} is selected`);

    setSelectedGoods(prev => (prev.includes(good) ? [] : [good]));
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value}
        <button
          onClick={() => {
            setValue('No goods selected');
            setSelectedGoods('');
          }}
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          style={{ display: value !== 'No goods selected' ? 'block' : 'none' }}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGoods.includes(good);
            const buttonLabel = isSelected ? '-' : '+';
            const buttonClass = isSelected ? 'button is-info' : 'button';
            const trClass = isSelected ? 'has-background-success-light' : '';

            return (
              <tr data-cy="Good" key={good} className={trClass}>
                <td>
                  <button
                    onClick={() => {
                      if (buttonLabel === '-') {
                        setSelectedGoods('');
                        setValue('No goods selected');
                      } else {
                        toggleSelection(good);
                      }
                    }}
                    data-cy="AddButton"
                    type="button"
                    className={buttonClass}
                  >
                    {buttonLabel}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
