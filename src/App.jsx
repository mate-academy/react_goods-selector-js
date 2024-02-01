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
  const [selectedGood, setSelectedGood] = useState('Jam');

  function master() {
    if (selectedGood === '') {
      return 'No goods selected';
    }

    return `${selectedGood} is selected`;
  }

  const closeClass = classNames(
    'delete ml-3', {
      hiden: selectedGood === '',
    },
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {master()}
        <button
          onClick={() => setSelectedGood('')}
          data-cy="ClearButton"
          type="button"
          className={closeClass}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const selection
              = good === selectedGood ? '-' : '+';

            const fieldBackground = classNames({
              'has-background-success-light': selectedGood === good,
            });

            const buttonStyle = classNames(
              'button ml-3', {
                'is-info': selectedGood === good,
              },
            );

            return (
              <tr
                data-cy="Good"
                className={fieldBackground}
              >
                <td>
                  <button
                    onClick={() => {
                      setSelectedGood(selection === '+' ? good : '');
                    }}
                    data-cy="AddButton"
                    type="button"
                    className={buttonStyle}
                  >
                    {selection}
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
