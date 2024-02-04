import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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
  const [value, setValue] = useState('Jam');
  const isSelected = good => value === good;

  const goodSelected = value ? `${value} is selected` : 'No goods selected';

  const handleButtonClick = (good) => {
    setValue(value === good ? null : good);
  };

  const buttonClasses = good => classNames('button', {
    'is-info': isSelected(good),
  });

  const resetGood = () => {
    setValue(null);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodSelected}
        {value && (
          <button
            onClick={() => resetGood()}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={isSelected(good) ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  onClick={() => handleButtonClick(good)}
                  className={buttonClasses(good)}
                  data-cy={`${isSelected(good) ? 'RemoveButton' : 'AddButton'}`}
                  type="button"
                >
                  {isSelected(good) ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </main>
  );
};
